import { FullConfig } from "@playwright/test";

import dotenv from "dotenv"


async function globalSetup(config: FullConfig) {

    try {
        if (process.env.test_env) {
            dotenv.config({
                path: `.env.${process.env.test_env}`,
                override: true
            });
        }
    } catch (error) {
        console.error("Error loading environment variables:", error);
    }
}
export default globalSetup;