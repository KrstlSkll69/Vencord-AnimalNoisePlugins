/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { addChatBarButton, ChatBarButton } from "@api/ChatButtons";
import { Devs } from "@utils/constants";
import { getCurrentChannel, sendMessage } from "@utils/discord";
import definePlugin from "@utils/types";

async function handleButtonClick() {
    // @ts-expect-error typing issue
    sendMessage(getCurrentChannel().id, { content: "Honk" });
}

const ChatBarIcon: ChatBarButton = () => {
    return (
        <ChatBarButton tooltip="Honk" onClick={handleButtonClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512">
                <path fill="currentColor" d="M322.8 50.96c-28.1.66-52.4 13.13-65.8 38.48c-13.4 25.36-16.1 64.96 3.6 120.46v.2c3.2 9.4 2.4 19.2-2.6 26.4c-5 7.3-12.9 11.6-21.9 14.5c-18 5.8-42.3 6.4-69.3 4.5c-48.7-3.5-105.4-15.7-142.38-27.9c-2.34 56.3 13.28 113.7 45.28 157.2c34.2 46.5 86.2 77.5 156 76.2c45.3-.8 98.8-7.4 140.2-25.5c41.4-18 70-45.8 71.3-92.4v-.1c.6-19.8-18.4-47.1-36.3-74.7c-8.9-13.8-17.3-27.8-21.9-42.4c-4.6-14.5-5-30.3 3.2-44.5l.2-.3l.2-.3c22.2-32.6 18.7-64.5 3.9-89.24c-14.7-24.79-41.5-41.12-63.7-40.6m30.5 42.05a18 18 0 0 1 18 17.99a18 18 0 0 1-18 18a18 18 0 0 1-18-18a18 18 0 0 1 18-17.99M416 130.2c.4 14.3-2.4 29.3-9.2 44.2c19.5-1.2 38.8-3.4 53.6-8.4c9.6-3.1 17.1-7.4 21.8-12.3c2.7-2.9 4.5-6 5.6-9.7c-24.7.3-51-6.3-71.8-13.8m-72.6 142.5c6.5 13.6 6.1 28.2.7 40.9s-15.3 23.8-27.7 33.9c-24.7 20-59.6 35.5-93.6 44.8s-66.4 12.8-88.7 4.8c-11.2-4-20.6-12.6-22.2-24.5c-1.6-12 3.6-24.8 14.4-39.8l14.6 10.6c-9.4 13-11.8 22.2-11.2 26.8c.7 4.7 3.1 7.3 10.4 10c14.7 5.2 45.9 3.5 78-5.3c32-8.7 65.3-23.8 87-41.4c10.8-8.8 18.7-18.2 22.4-27c3.8-8.8 4.1-16.8-.3-26z" />
            </svg>
        </ChatBarButton>
    );
};

export default definePlugin({
    name: "Honk",
    description: "Adds a chatbar button to Honk in chat",
    authors: [
        [Devs.Samwich],
        // Import from EquicordDev for Equicord
        { name: "krystalskullofficial", id: 929208515883569182n }
    ],
    start() {
        addChatBarButton("vc-Honk", ChatBarIcon);
    }
});