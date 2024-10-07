import React from "react";


const About = () => {
    return (
        <section className="bg-gray-100 py-4">
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-6 md:px-0">
                <div className="md:w-1/2 h-[300px] flex justify-center items-center">
                    <img
                        src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmwyMzRsNTNsbXV0MHpndGlzMGFiNHF1N3VoMG0xOW5hMWg2MWNoMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/oY2tKv2aiG1Xi37mlM/giphy.webp"
                        alt="About-Us"
                        className="max-w-full max-h-[310px] rounded-full"
                    />
                </div>


                <div className="md:w-1/2 mb-6 md:mb-0 ml-5">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        About Us
                    </h1>
                    <p className="text-lg text-gray-700 mb-6">
                        At Spatial Graphics International, we specialize in transforming complex spatial data into actionable insights that empower informed decision-making. Our team of experienced professionals is dedicated to providing high-quality spatial data solutions tailored to meet the unique needs of various industries, including urban planning, environmental management, and logistics. With a commitment to excellence, we leverage advanced technology and innovative methodologies to deliver services that help our clients thrive in a data-driven world.
                    </p>
                </div>
            </div>
        </section>
    )
}


export default About;