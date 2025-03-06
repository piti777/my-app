"use client"; 
import { fetchActionApi } from "@/app/utils/action"
import { useState } from "react";
export default function login(){
    const [identifier,setIdentifier ] =useState("");
    const [password, setPasssword ] =useState("");
    const login = async(e: React.FormEvent)=> {
        e.preventDefault();
        let body ={
            identifier: identifier,
            password: password
        }
        const res = await fetchActionApi("/api/auth/local",{
            method: "POST", 
            body: JSON.stringify(body)})
    } 
    return (
        <div>
            เข้าสู่ระบบ
            <form onSubmit={(e) => login(e)}>
                <input
                    type="text"
                    id="identifier"
                    name="identifier"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    className="border"
                    required
                ></input>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPasssword(e.target.value)}
                    className="border"
                    required
                ></input>
                <button
                type="submit"
                className="cursor-pointer">
                    submit
                </button>
            </form>
        </div>
    )
}