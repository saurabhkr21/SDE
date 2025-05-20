import React from "react";
import StatCard from "./StatCard";
import DetailCard from "./DetailCard";

export default function UserCard({ userData = {} }) {
    const {
        name = "",
        bio = "",
        company = "",
        blog = "",
        email = "",
        location = "",
        login: username = "",
        avatar_url = null,
        twitter_username = "",
        html_url = "",
        public_repos = 0,
        public_gists = 0,
        followers = 0,
        following = 0,
    } = userData ?? {};

    const stats = [
        {
            label: "Repositories",
            value: public_repos,
        },
        {
            label: "Followers",
            value: followers,
        },
        {
            label: "Following",
            value: following,
        },
        {
            label: "Gists",
            value: public_gists,
        },
    ];

    const details = [
        {
            label: "Company",
            value: company,
        },
        {
            label: "Location",
            value: location,
        },
        {
            label: "Email",
            value: email,
        },
        {
            label: "Website",
            value: blog,
        },
        {
            label: "Twitter",
            value: twitter_username,
        },
    ];

    return (
        <div className="w-full flex flex-col justify-center items-center shadow-lg rounded-2xl">
            <div className="flex-1 self-stretch flex flex-col  text-center gap-2 p-8 justify-center items-center bg-slate-950 text-white">
                <img
                    src={
                        avatar_url ?? "https://avatars.githubusercontent.com/u/583231?v=4"
                    }
                    alt="Github Avatar"
                    className="w-32 h-32 rounded-full m-auto my-4 shadow-md"
                />
                <span className="font-bold text-2xl">{name}</span>
                <a className="text-xs">@{username}</a>
                <p>{bio}</p>
            </div>
            <div className="w-full p-8 flex flex-col gap-8 justify-center items-center">
                <div className="w-full flex flex-wrap md:flex-nowrap justify-center gap-4">
                    {stats.map((stat) => (
                        <StatCard {...stat} />
                    ))}
                </div>
                <div className="w-full gap-4  grid grid-cols-1 md:grid-cols-2 gap-x-16">
                    {details.map((detail) =>
                        detail.value ? <DetailCard {...detail} /> : <></>
                    )}
                </div>

                <a
                    href={html_url}
                    target="__blanks"
                    className="flex justify-center items-center gap-4 py-2 px-4 rounded-lg bg-blue-500 text-white"
                >
                    <img
                        src="https://avatars.githubusercontent.com/u/583231?v=4"
                        alt="Github Avatar"
                        className="w-4 h-4 rounded-full "
                    />
                    View User on GitHub
                </a>
            </div>
        </div>
    );
}