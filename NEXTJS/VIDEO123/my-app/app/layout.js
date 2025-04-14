import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar.js";
import Footer from "./footer/page.js";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Facebook - Connect with the world",
  description: "Facebook helps you connect with the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <Navbar />
        <div className="container max-w-[60rem] mx-auto my-5 min-h-screen">

        {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}

//LINK component in next.js is a reacr component that extends the HTML <a> tag to provide pre-fetching and client-side navigation capabilities. It is used to create links between pages in a Next.js application, allowing for faster navigation and improved user experience. The LINK component can be used to navigate to different pages within the application, as well as to external URLs. It also supports dynamic routing, allowing for more complex navigation scenarios.

//SCRIPT component in next.js is used to load and manage third-party scripts in a Next.js application. It provides a way to add scripts to the application, either by loading them from an external URL or by including them directly in the application. The Script component can be used to load scripts asynchronously, ensuring that they do not block the rendering of the page. It also supports loading scripts only on the client-side, allowing for better performance and improved user experience.
//Bascially agar kisi page pr js chlani h ,this tag can be used.
//it provides different functionalities like when to load script ,etc ,check documentation for more info

//IMAGE component in next.js is used to optimize and display images in a Next.js application. It provides a way to load images efficiently, automatically optimizing them for different screen sizes and resolutions. The Image component supports lazy loading(jaise jaise scroll kro tabhi images load ho). It also provides a way to specify different image formats and sizes, allowing for better performance and improved user experience. The Image component can be used to display images from local files or from external URLs, making it a versatile tool for managing images in a Next.js application. 
//but when we call external host for images, we need to add the domain in next.config.js file in the domains array.

