import { Link } from 'react-scroll';

const Index = () => (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary bg-gradient fixed-top" id="sideNav">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
                <span className="d-block d-lg-none">Portofolio</span>
                <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="/profile.jpg" width={30} height={40} alt="..." /></span>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link href="#about" className="nav-link" activeClass="nav-link active" spy to="about">
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="#interests" className="nav-link" activeClass="nav-link active" spy to="interests">
                            Interests
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="#experience" className="nav-link" activeClass="nav-link active" spy to="experience">
                            Experience
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="#education" className="nav-link" activeClass="nav-link active" spy to="education">
                            Education
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="#skills" className="nav-link" activeClass="nav-link active" spy to="skills">
                            Skills
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="#certifications" className="nav-link" activeClass="nav-link active" spy to="certifications">
                            Certifications
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
        {/* Page Content*/}
        <div className="container p-0">
            {/* About*/}
            <section className="resume-section" id="about">
                <div className="resume-section-content">
                    <h3 className="text-lowercase">
                        <span className="text-uppercase">H</span>ii, My name is
                    </h3>
                    <p className="h2 text-capitalize">
                        Dewana Kretarta Lokeswara
                    </p>
                    <p className="lead mb-5">
                        Let&apos;s get started.
                    </p>
                    <div className="social-icons">
                        <a className="social-icon" href="https://www.linkedin.com/in/dewana-kretarta-b8871b228/"><i className="fab fa-linkedin-in" /></a>
                        <a className="social-icon" href="https://github.com/dewanakl"><i className="fab fa-github" /></a>
                        <a className="social-icon" href="https://www.facebook.com/dewana.kael"><i className="fab fa-facebook-f" /></a>
                        <a className="social-icon" href="mailto:dewanakretarta29@gmail.com"><i className="fa-solid fa-envelope"></i></a>
                    </div>
                </div>
            </section>
            <hr className="m-0" />
            {/* Interests*/}
            <section className="resume-section" id="interests">
                <div className="resume-section-content">
                    <h2 className="mb-5">Interests</h2>
                    <p className="lead mb-5">
                        I am Dewana Kretarta Lokeswara. I am an Information Systems Student from the University of Jember. I have experience as a Junior
                        Web Developer. I have an interest in a career as a Backend Developer (Javascript and PHP). I&apos;m a fast learner and self-taught, I&apos;ve
                        been learning new technologies in recent years myself from viewing youtube and reading relevant sources.
                    </p>
                </div>
            </section>
            <hr className="m-0" />
            {/* Experience*/}
            <section className="resume-section" id="experience">
                <div className="resume-section-content">
                    <h2 className="mb-5">Experience</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Web Developer</h3>
                            <div className="subheading mb-3">Intelitec Solutions</div>
                            <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">December 2011 - March 2013</span></div>
                    </div>
                </div>
            </section>
            <hr className="m-0" />
            {/* Education*/}
            <section className="resume-section" id="education">
                <div className="resume-section-content">
                    <h2 className="mb-5">Education</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">University of Colorado Boulder</h3>
                            <div className="subheading mb-3">Bachelor of Science</div>
                            <div>Computer Science - Web Development Track</div>
                            <p>GPA: 3.23</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">August 2006 - May 2010</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">James Buchanan High School</h3>
                            <div className="subheading mb-3">Technology Magnet Program</div>
                            <p>GPA: 3.56</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">August 2002 - May 2006</span></div>
                    </div>
                </div>
            </section>
            <hr className="m-0" />
            {/* Skills*/}
            <section className="resume-section" id="skills">
                <div className="resume-section-content">
                    <h2 className="mb-5">Skills</h2>
                    <div className="subheading mb-3">Programming Languages &amp; Tools</div>
                    <ul className="list-inline dev-icons">
                        <li className="list-inline-item me-3"><i className="fab fa-html5" /></li>
                        <li className="list-inline-item me-3"><i className="fab fa-css3-alt" /></li>
                        <li className="list-inline-item me-3"><i className="fab fa-js-square" /></li>
                        <li className="list-inline-item me-3"><i className="fab fa-next-js" /></li>
                        <li className="list-inline-item me-3"><i className="fab fa-node-js" /></li>
                        <li className="list-inline-item me-3"><i className="fab fa-php" /></li>
                    </ul>
                    <div className="subheading mb-3">Workflow</div>
                    <ul className="fa-ul mb-0">
                        <li>
                            <span className="fa-li"><i className="fas fa-check" /></span>
                            Mobile-First, Responsive Design
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check" /></span>
                            Cross Browser Testing &amp; Debugging
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check" /></span>
                            Cross Functional Teams
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check" /></span>
                            Agile Development &amp; Scrum
                        </li>
                    </ul>
                </div>
            </section>
            <hr className="m-0" />
            {/* Certifications*/}
            <section className="resume-section" id="certifications">
                <div className="resume-section-content">
                    <h2 className="mb-5">Certifications</h2>
                    <ul className="fa-ul mb-0">
                        <li>
                            <span className="fa-li"><i className="fas fa-trophy text-warning" /></span>
                            Google Analytics Certified Developer
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-trophy text-warning" /></span>
                            Mobile Web Specialist - Google Certification
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-trophy text-warning" /></span>
                            1
                            <sup>st</sup>
                            Place - University of Colorado Boulder - Emerging Tech Competition 2009
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-trophy text-warning" /></span>
                            1
                            <sup>st</sup>
                            Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-trophy text-warning" /></span>
                            2
                            <sup>nd</sup>
                            Place - University of Colorado Boulder - Emerging Tech Competition 2008
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-trophy text-warning" /></span>
                            1
                            <sup>st</sup>
                            Place - James Buchanan High School - Hackathon 2006
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-trophy text-warning" /></span>
                            3
                            <sup>rd</sup>
                            Place - James Buchanan High School - Hackathon 2005
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    </>
);


export default Index;
