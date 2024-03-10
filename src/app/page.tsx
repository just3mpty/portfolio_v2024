import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Gallery from "@/components/gallery/Gallery";
import Homepage from "@/components/homepage/Homepage";

export default function Home() {
    return (
        <>
            <Homepage />
            <Gallery />
            <About />
            <Contact />
        </>
    );
}
