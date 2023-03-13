import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";
import Marked from "../graphics/Marked";

export default function EmailForm() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    async function handleSumbit(e: FormEvent<HTMLFormElement>) {
        e?.preventDefault();

        if (!email) {
            setError("Email is required");
            console.log("Email is required");
            return;
        }

        setLoading(true);
        try {
            const res = await fetch('/api/subscribe', { method: 'POST', body: JSON.stringify({ email: email }) });
            const data = await res.json();

            if (data.success) {
                setError('');
                setSuccess(true);
            } else {
                throw new Error(data?.error || 'Something went wrong, please try again later');
            }

        } catch (e: any) {
            setError(e.message);
            console.error(e);
        }

        setEmail('');
        setLoading(false);
        setSuccess(true);
    }

    return (
        <form onSubmit={handleSumbit} className="p-5 overflow-hidden flex flex-col md:flex-row w-full justify-center">
            <input
                type="email"
                name="email"
                id="email"
                required
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full md:w-1/2 h-full bg-white border border-gray-400 rounded-xl p-3 mb-5 md:mb-0"
            />
            {loading ? (
                <button type="button" className="px-10 py-4 bg-red rounded-xl text-white ml-0 md:ml-5 flex justify-center">
                    <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        ></circle>
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v1a7 7 0 00-7 7h1z"
                        ></path>
                    </svg>
                </button>
            ) : success ? (
                // render mark svg here
                <button type="button" className="px-10 py-4 bg-red rounded-xl text-white ml-0 md:ml-5 flex justify-center">
                    <Marked />
                </button>
            )
                : (
                    <button type="submit" className="px-10 py-4 bg-red rounded-xl text-white ml-0 md:ml-5 flex justify-center">Submit</button>
                )}
        </form>
    )
}