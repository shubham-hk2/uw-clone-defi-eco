import "react-responsive-carousel/lib/styles/carousel.min.css";

const Hello = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-1 flex justify-center items-center ">
                <div className="flex flex-col md:flex-row items-center w-5/6 m-auto md:w-5/6 xl:w-4/6">
                    <div className="md:-ml-24 mt-0 md:-mt-12 text-sm md:text-md lg:text-lg z-10">
                        <a href="/merch"><h3><i>Home</i></h3></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hello;