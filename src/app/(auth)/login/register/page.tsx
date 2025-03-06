"use client";
import { fetchActionApi } from "@/app/utils/action";
import { useState } from "react";
 
export default function Register() {
    const [ username, setUsername] = useState("");
    const [ email, setEmail] = useState("");
    const [ password, setPassword] = useState("");
    const [ confirmPassword, setConfirmPassword] = useState("");
    const register = async (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("รหัสผ่านไม่ตรงกัน")
            return;
        }
        let body = {
            username: "",
            email: "",
            password: ""
        };
        const res = await fetchActionApi("/api", {
            method: "POST",
            body: JSON.stringify(body)
        });
    }
    return (
        <div>
            สมัครสมาชิก
            <form onSubmit={(e) => register(e)}>
                <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border"
                required
                ></input>
                <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border"
                required
                ></input>
                <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border"
                required
                ></input>
                <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border"
                required
                ></input>
                <button
                type="submit"
                >submit</button>
            </form>
        </div>
    )
}