# DASH Decoded: An Interactive Guide to Modern Video Streaming

This is a single-page web application built with Next.js and designed to be an interactive educational tool for understanding the DASH (Dynamic Adaptive Streaming over HTTP) protocol.

## Core Features

-   **Hero Section:** A welcoming introduction with an animated icon and a call-to-action.
-   **Restaurant Analogy:** A simple, non-technical comparison between traditional video downloads and adaptive streaming.
-   **Core Components Explained:** Informative cards detailing the roles of the MPD, Segments, and the DASH Player.
-   **Interactive DASH Visualizer:** A live DASH video player integrated with:
    -   Real-time, color-coded logs showing player decisions (quality changes, segment requests).
    -   Live stats for buffer length and current video quality.
    -   A network simulation button to see how the player adapts to poor network conditions.
-   **Real-World Discovery Guide:** A step-by-step guide for users to find DASH streams on their favorite streaming sites using browser developer tools.
-   **Key Benefits Summary:** A quick recap of why DASH is the standard for modern streaming.

## Tech Stack

-   **Framework:** [Next.js](https://nextjs.org/) (with App Router)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components:** [ShadCN UI](https://ui.shadcn.com/)
-   **Video Player:** [dash.js](https://github.com/Dash-Industry-Forum/dash.js/)

## Getting Started

To get this project running on your local machine, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd <repository-folder>
    ```

2.  **Install dependencies:**
    You'll need Node.js and npm installed. Run the following command to install the project's dependencies:
    ```bash
    npm install
    ```

3.  **Run the development server:**
    Once the installation is complete, you can start the local server:
    ```bash
    npm run dev
    ```

4.  **Open the application:**
    Open your browser and navigate to [http://localhost:9002](http://localhost:9002) to see the application running.
