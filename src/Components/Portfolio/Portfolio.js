import React from 'react';

const Portfolio = () => {
    return (
        <div>
            <h2>Portfolio</h2>
            <h4>Muslim Ahmed Khan </h4>
            <p>letsmailmak@gmail.com</p>
            <div class="overflow-x-auto px-5 py-2">
                <table class="table w-96 ">

                    <thead >
                        <tr >

                            <th>University</th>
                            <th>College</th>
                            <th>School</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr >

                            <td ><div>
                                <p>Southeast University</p>
                                <p>Bsc in CSE</p>
                                <p>2016-2020</p>
                                <p>CGPA-(3.30/4.00)</p>
                            </div></td>
                            <td>
                                <div>
                                    <p>Uttara High School & college</p>
                                    <p>HSC Science</p>
                                    <p>2013-2015</p>
                                    <p>GPA-(5.00/5.00)</p>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <p>Civil Aviation High School </p>
                                    <p>SSC Science</p>
                                    <p>2006-2012</p>
                                    <p>GPA-(4.94/5.00)</p>
                                </div>
                            </td>
                        </tr>

                    </tbody>
                </table>
                <div>
                    <h6>Skills:</h6>
                    <hr></hr>
                    <div className='flex  justify-center items-center gap-2 '>
                        <hr></hr>
                        <p>HTML , CSS ,</p>
                        <p>JavaScript ,</p>
                        <p>React.js ,</p>
                        <p>Bootstrap , Tailwind ,</p>
                        <p>Node.js ,</p>
                        <p>MongoDB ,</p>
                        <p>Firebase</p>
                        <p></p>
                    </div>
                </div>
                <div>
                    <hr></hr>
                    <h6>Gadgets Warehouse</h6>
                    <p>Gadgets Warehouse offers technology item store services and supply chain solutions. The main
                        purpose of this website is to manage any inventory system perfectly. Users can Add, Delete
                        and View their inventory items. Also can make a delivery and restock an item with the help of
                        this system
                    </p>
                    <p><span className='font-bold'>Technology Used: </span> React JS, Node JS,MongoDB, React Router, Bootstrap, React-Bootstrap,
                        Firebase, React Firebase Hook, JWT, Heroku.
                    </p>
                    <p><span className='font-bold'>Links: </span><a href='https://assignment-11-4c723.web.app/'>LiveSite</a>
                        <span className='font-bold'> || </span><a href='https://github.com/ProgrammingHeroWC4/warehouse-management-client-side-mak-43'>GitHub(Client)</a>
                        <span className='font-bold'> || </span><a href='https://github.com/ProgrammingHeroWC4/warehouse-management-server-side-mak-43'>GitHub(Server)</a>

                    </p>
                </div>
                <div>
                    <hr></hr>
                    <h6>Better Call Mak </h6>
                    <p>We are a leading law firm in financial  & business industry .With more than 20 years of experience
                    </p>
                    <p><span className='font-bold'>Technology Used: </span>React JS, React Router, Bootstrap, React-Bootstrap, Firebase, CSS, React
                        Firebase Hook.

                    </p>
                    <p><span className='font-bold'>Links: </span><a href='https://assignment-10-fbd63.web.app/'>LiveSite</a>
                        <span className='font-bold'> || </span><a href='https://github.com/programming-hero-web-course-4/independent-service-provider-mak-43'>GitHub(Client)</a>
                      

                    </p>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;