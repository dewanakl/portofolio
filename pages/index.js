import { Link } from 'react-scroll';

const Index = () => (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary bg-gradient fixed-top" id="sideNav">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
                <span className="d-block d-lg-none">Portofolio</span>
                <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="/profile.jpg" width={30} height={40} alt="..." /></span>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-hamburger"></i>
            </button>
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
                        <Link href="#projects" className="nav-link" activeClass="nav-link active" spy to="projects">
                            Projects
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
                        <a className="social-icon" href="https://www.linkedin.com/in/dewana-kretarta-b8871b228/"><i className="fab fa-linkedin"></i></a>
                        <a className="social-icon" href="https://github.com/dewanakl"><i className="fab fa-github" /></a>
                        <a className="social-icon" href="https://www.facebook.com/dewana.kael"><i className="fab fa-facebook-f" /></a>
                        <a className="social-icon" href="mailto:dewanakretarta29@gmail.com"><i className="fas fa-envelope" /></a>
                    </div>
                </div>
            </section>
            <hr className="m-0" />
            {/* Interests*/}
            <section className="resume-section" id="interests">
                <div className="resume-section-content">
                    <h2 className="mb-5">Interests</h2>
                    <p style={{ fontSize: 20 }} className="lead mb-5">
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
                            <h3 className="mb-0">Programmer Web Developer</h3>
                            <div className="subheading mb-3">Universitas Jember</div>
                            <ul style={{ fontSize: 18 }}>
                                <li>Build a website for agro-industry partners.</li>
                                <li>Implement material such as activity diagrams and sequence diagrams in program code.</li>
                                <li>Build a database based on the Entity Relationship Diagram that has been created by the designer.</li>
                                <li>Deploy the finished website to the heroku web hosting service.</li>
                            </ul>
                            <a style={{ fontSize: 20 }} href="http://thempe.herokuapp.com/" target="_blank" rel="noopener noreferrer">thempe.herokuapp.com</a>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">Apr 2022 - Jul 2022</span></div>
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
                            <h3 className="mb-0">Universitas Jember</h3>
                            <p className="subheading mb-3">Bachelor of Information Systems</p>
                            <p>Current GPA: 3.6</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">2020 - Present</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">SMAN 1 Banyumas</h3>
                            <div className="subheading mb-3">IPA</div>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">2017 - 2020</span></div>
                    </div>
                </div>
            </section>
            <hr className="m-0" />
            {/* Skills*/}
            <section className="resume-section" id="skills">
                <div className="resume-section-content">
                    <h2 className="mb-3">Skills</h2>
                    <ul className="list-inline dev-icons">
                        <li className="list-inline-item me-3"><i className="fab fa-html5" /></li>
                        <li className="list-inline-item me-3"><i className="fab fa-css3-alt" /></li>
                        <li className="list-inline-item me-3"><i className="fab fa-js-square" /></li>
                        <li className="list-inline-item me-3"><i className="fab fa-java" /></li>
                        <li className="list-inline-item me-3"><i className="fab fa-php" /></li>
                        <li className="list-inline-item me-3"><i className="fab fa-python" /></li>
                        <li className="list-inline-item me-3"><i className="fab fa-node" /></li>
                        <li className="list-inline-item me-3"><i className="fab fa-laravel" /></li>
                        <li className="list-inline-item me-3"><i className="fab fa-bootstrap" /></li>
                    </ul>
                    <div className="subheading mb-3">Languages</div>
                    <ul>
                        <li>
                            HTML, CSS, JavaScript, Java, PHP, Python
                        </li>
                    </ul>
                    <div className="subheading mb-3">Technologies</div>
                    <ul>
                        <li>
                            Next.js, Node.js, Laravel, jQuery, Bootstrap, Tailwind CSS.
                        </li>
                    </ul>
                    <div className="subheading mb-3">DBMS</div>
                    <ul>
                        <li>
                            MySQL, PostgreSQL.
                        </li>
                    </ul>
                </div>
            </section>
            <hr className="m-0" />
            {/* Projects*/}
            <section className="resume-section" id="projects">
                <div className="resume-section-content">
                    <h2 className="mb-5">PROJECTS</h2>
                    <ul style={{ fontSize: 20 }} className="mb-3">
                        <li>
                            Kamu - Kamu PHP Framework dibuat secara native.
                        </li>
                        <li>
                            pplAgro - Repository mata kuliah pengembangan perangkat lunak untuk agroindustri modern.
                        </li>
                        <li>
                            My-File - Simple file storage, aplikasi untuk menyimpan file secara sederhana.
                        </li>
                        <li>
                            SiCafe - Sistem informasi pengelola transaksi cafe berbasis console menggunakan java.
                        </li>
                    </ul>
                    <a style={{ fontSize: 18 }} className="mt-3" href="https://github.com/dewanakl?tab=repositories" target="_blank" rel="noopener noreferrer">View more</a>
                </div>
            </section>
            <hr className="m-0" />
            {/* Certifications*/}
            <section className="resume-section" id="certifications">
                <div className="resume-section-content">
                    <h2 className="mb-5">Certifications</h2>
                    <div className="row mt-4">
                        <div className="col-xl-6 mb-3">
                            <div className="card">
                                <a target="_blank" rel="noopener noreferrer" href="https://www.dicoding.com/certificates/KEXLG982MZG2" className="imagehv">
                                    <img src="dasar-js.png" alt="basic js" className="card-img-top imagesc" />
                                    <div className="link">
                                        <i className="fas fa-external-link-alt fa-fw btn-play" />
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-6 mb-3">
                            <div className="card">
                                <a target="_blank" rel="noopener noreferrer" href="https://www.dicoding.com/certificates/JLX13O0L5P72" className="imagehv">
                                    <img src="java.png" alt="basic java" className="card-img-top imagesc" />
                                    <div className="link">
                                        <i className="fas fa-external-link-alt fa-fw btn-play" />
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-6 mb-3">
                            <div className="card">
                                <a target="_blank" rel="noopener noreferrer" href="https://www.dicoding.com/certificates/1RXYMOYN1XVM" className="imagehv">
                                    <img src="gcloud.png" alt="basic gcloud" className="card-img-top imagesc" />
                                    <div className="link">
                                        <i className="fas fa-external-link-alt fa-fw btn-play" />
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-6 mb-3">
                            <div className="card">
                                <a target="_blank" rel="noopener noreferrer" href="https://www.dicoding.com/certificates/KEXL3K530PG2" className="imagehv">
                                    <img src="solid.png" alt="middle solid" className="card-img-top imagesc" />
                                    <div className="link">
                                        <i className="fas fa-external-link-alt fa-fw btn-play" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
);

export default Index;
