import React from 'react';

const Contact = () => {
    return (
        <div>
            <section class="min-h-screen bg-cover ">
                <div class="flex flex-col min-h-screen ">
                    <div class="container flex flex-col flex-1 px-6 py-12 mx-auto">
                        <div class="flex-1 lg:flex lg:items-center lg:-mx-6">
                            <div class="lg:w-1/2 lg:mx-6">
                                <h1 class="text-3xl font-semibold capitalize lg:text-5xl">
                                    Contact us for <br /> more info
                                </h1>

                                <div class="mt-6 space-y-8 md:mt-8">
                                    <p class="flex items-start -mx-2">
                                        <span class="mx-2 truncate w-72 ">
                                            Cecilia Chapman 711-2880 Nulla
                                            St. Mankato Mississippi 96522
                                        </span>
                                    </p>

                                    <p class="flex items-start -mx-2">
                                        <span class="mx-2  truncate w-72 ">(257) 563-7401</span>
                                    </p>
                                    <p class="flex items-start -mx-2">
                                        <span class="mx-2  truncate w-72">acb@example.com</span>
                                    </p>
                                </div>

                                <div class="mt-6 w-80 md:mt-8">
                                    <h3 class="">Follow us</h3>
                                    <div class="flex mt-4 -mx-1.5 ">
                                        {/* social icon */}
                                    </div>
                                </div>
                            </div>
                            <div class="mt-8 lg:w-1/2 lg:mx-6">
                                <div class="w-full px-8 py-10 mx-auto overflow-hidden shadow-2xl rounded-xl lg:max-w-xl">
                                    <h1 class="text-2xl font-medium">Contact form</h1>

                                    <p class="mt-4">
                                        Ask us everything and we would love
                                        to hear from you
                                    </p>
                                    <form class="mt-6">
                                        <div class="flex-1">
                                            <label class="block mb-2 text-sm">Full Name</label>
                                        </div>

                                        <div class="flex-1 mt-6">

                                        </div>

                                        <div class="w-full mt-6">

                                        </div>
                                        <button className='btn
                                        '>Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;