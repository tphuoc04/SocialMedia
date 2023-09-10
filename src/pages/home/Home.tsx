import React from "react";
import './home.css';
import { Menu, Newfeed, Suggestion} from "../../components";

export default function HomePage() {
    return (
        <div>
            <Menu />
            <Newfeed />
            <Suggestion />
        </div>
    );
}