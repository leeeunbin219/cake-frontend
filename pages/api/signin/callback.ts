import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { code } = req.query;

    if (code) {
    const url = "https://kauth.kakao.com/oauth/token";
    try {
    // 카카오 토큰 받기
    const { data } = await axios.post(url, null, {
        params: {
            grant_type: "authorization_code",
            client_id: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID,
            redirect_uri: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI,
            code,
        },
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
    });
    const { access_token, refresh_token } = data;

    // 사용자 정보 조회하기(이메일이랑 닉네임검색)
    const infoResult = await axios.post(
        "https://kapi.kakao.com/v2/user/me",
        null,
        {
            headers: {
            Authorization: `Bearer ${access_token}`,
            "Content-Type": "application/x-www-form-urlencoded",
            },
        }
        );
        const email = infoResult.data.kakao_account.email;

    // Django JWT 토큰 생성 및 전달
    try {
        const jwtResponse = await axios.post(`${process.env.NEXT_PUBLIC_DJANGO_API_URL}/accounts/get_jwt_token/`, {
            email
        });

        const { access_token: jwtAccessToken, refresh_token: jwtRefreshToken } = jwtResponse.data;

        // Django DB에 사용자 이메일과 함께 JWT 토큰 저장
        await axios.post(`${process.env.NEXT_PUBLIC_DJANGO_API_URL}/accounts/save_jwt_token/`, {
            email,
            jwt_access_token: jwtAccessToken,
            jwt_refresh_token: jwtRefreshToken
        });

        } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Django API 호출 중 오류가 발생했습니다." });
        }

    // refresh_token 저장
        const thirtyDaysInSeconds = 60 * 60 * 24 * 30;  
        const refreshCookie = `refresh_token=${refresh_token}; Path=/; HttpOnly; Max-Age=${thirtyDaysInSeconds}`;
        res.setHeader("Set-Cookie", refreshCookie);

        res.status(200).json({ success: true });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "카카오 API 호출 중 오류가 발생했습니다." });
    }
    } else {
    res.status(400).json({ error: "code가 없습니다." });
    }
}
