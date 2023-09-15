
import "./../../style/services.scss";
import { Helmet } from "react-helmet";
import rhombus from "../../resourses/img/icons/rhombus.svg"

const ServicesPage = ({}) => {
  return (
    <>  
      <Helmet>
          <meta 
            name="description" 
            content="Creative studio MIRA specializes in creating unique visual solutions in the field of corporate and consumer branding." />
          <title>MiraBrand | Services</title>
      </Helmet>
      <h1 className="sr-only">services</h1>
      <section className="company">
        <div className="container">
          <div className="company__promo">
            <p className="company__promo-text">We offer a full range of services for projects of any level - from the initial idea to the launch of the project</p>
            <div className="company__promo-img-box">
              <img src={rhombus} alt="" />
            </div>
          </div>

          <div className="company__services">
            <h2 className="company__title title-h2">services</h2>

            <ul className="company__list">
              <li className="company__item">
                <div className="company__item-num">01</div>
                <div className="company__box">
                  <h3 className="company__subtitle">Branding</h3>
                  <ul className="company__sublist">
                    <li className="company__subitem">Logo</li>
                    <li className="company__subitem">Corporate identity</li>
                    <li className="company__subitem">Brandbook</li>
                  </ul>
                </div>
                <div className="company__text">
                  <p>We create strong branding for products and companies. Starting from the brand model and ending with the design system, we create identities that reflect the values of your company.</p>
                </div>
              </li>

              <li className="company__item">
                <div className="company__item-num">02</div>
                <div className="company__box">
                  <h3 className="company__subtitle">Digital</h3>
                  <ul className="company__sublist">
                    <li className="company__subitem">UI/UX design</li>
                    <li className="company__subitem">Prototyping</li>
                    <li className="company__subitem">Development</li>
                    <li className="company__subitem">Tech support</li>
                  </ul>
                </div>
                <div className="company__text">
                  <p>A full cycle of services for creating and launching a website from scratch or redesigning a live website taking into account current trends and requirements.</p>
                </div>
              </li>

              <li className="company__item">
                <div className="company__item-num">03</div>
                <div className="company__box">
                  <h3 className="company__subtitle">Animations</h3>
                  <ul className="company__sublist">
                    <li className="company__subitem">Promotional videos</li>
                    <li className="company__subitem">Set design</li>
                    <li className="company__subitem">Broadcast design</li>
                  </ul>
                </div>
                <div className="company__text">
                  <p>A proven way to breathe life into a digital product or marketing campaign. Let's do this with promotional and explanatory videos or interactions with your product.</p>
                </div>
              </li>

              <li className="company__item">
                <div className="company__item-num">04</div>
                <div className="company__box">
                  <h3 className="company__subtitle">Creative</h3>
                  <ul className="company__sublist">
                    <li className="company__subitem">Brain storming</li>
                    <li className="company__subitem">Key visuals</li>
                    <li className="company__subitem">Ad posters</li>
                  </ul>
                </div>
                <div className="company__text">
                  <p>We will show what cannot be expressed in words — the advantages of a single feature, the unique features of a whole product or about a company using images or whole video clips.</p>
                  <p>We will analyze the task, select the right set of tools, prepare storyboards, come up with and agree on a scenario, render and give in all the necessary sizes.</p>
                </div>
              </li>

              <li className="company__item">
                <div className="company__item-num">05</div>
                <div className="company__box">
                  <h3 className="company__subtitle">Illustration</h3>
                </div>
                <div className="company__text">
                  <p>Custom graphics are a popular effective way to make a digital product attractive and emotional. We create original 2D and 3D illustrations that add uniqueness and beauty to your brand.</p>
                </div>
              </li>

              <li className="company__item">
                <div className="company__item-num">06</div>
                <div className="company__box">
                  <h3 className="company__subtitle">Environmental design</h3>
                  <ul className="company__sublist">
                    <li className="company__subitem">Registration of commercial spaces. (stores, restaurants, coffee shops)</li>
                    <li className="company__subitem">Decorating private and public spaces</li>
                    <li className="company__subitem">Designing expositions</li>
                  </ul>
                </div>
                <div className="company__text">
                  <p>Development of system solutions for commercial interiors, public and office spaces, taking into account aesthetic and ergonomic functions.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="advantages">
        <div className="container">
          <ul className="advantages__list">
            <li className="advantages__item">
              <div className="advantages__num">12</div>
              <p className="advantages__text">Years of experience</p>
            </li>
            <li className="advantages__item">
              <div className="advantages__num">869+</div>
              <p className="advantages__text">Сompleted projects</p>
            </li>
            <li className="advantages__item">
              <div className="advantages__num">24/7</div>
              <p className="advantages__text">Hours in touch</p>
            </li>
            <li className="advantages__item">
              <div className="advantages__num">18</div>
              <p className="advantages__text">creative people on the team</p>
            </li>
          </ul>
        </div>
      </div>

      <section className="team">
        <div className="container">
          <h2 className="team__title title-h2">Team</h2>

          <ul className="team__list">
            <li className="team__item">
              <div className="team__post">Creative lead, founder</div>
              <div className="team__name">Kuznetsov Evgenii</div>
            </li>

            <li className="team__item">
              <div className="team__post">Concept designer</div>
              <div className="team__name">Shmeleva Mararita</div>
            </li>

            <li className="team__item">
              <div className="team__post">3D concept designer</div>
              <div className="team__name">Samoldina Anna</div>
            </li>

            <li className="team__item">
              <div className="team__post">Ceo</div>
              <div className="team__name">Dim Gardian</div>
            </li>

            <li className="team__item">
              <div className="team__post">Brand designer</div>
              <div className="team__name">Filina Victory</div>
            </li>

            <li className="team__item">
              <div className="team__post">3D designer</div>
              <div className="team__name">Maslinkova Anna</div>
            </li>

            <li className="team__item">
              <div className="team__post">Sales manager</div>
              <div className="team__name">Jack Smith</div>
            </li>

            <li className="team__item">
              <div className="team__post">Graphic designer</div>
              <div className="team__name">Ekaterina Hripunova</div>
            </li>

            <li className="team__item">
              <div className="team__post">3D designer</div>
              <div className="team__name">Vitaly Grishin</div>
            </li>

            <li className="team__item">
              <div className="team__post">Project manager</div>
              <div className="team__name">Marina Lastochkina</div>
            </li>

            <li className="team__item">
              <div className="team__post">Graphic designer</div>
              <div className="team__name">Anna Vorobieva</div>
            </li>

            <li className="team__item">
              <div className="team__post">3D designer</div>
              <div className="team__name">Irina</div>
            </li>

            <li className="team__item">
              <div className="team__post">Motion designer</div>
              <div className="team__name">Nik Chirkov</div>
            </li>

            <li className="team__item">
              <div className="team__post">UI/UX designer</div>
              <div className="team__name">Filipp Bocharnikov</div>
            </li>

            <li className="team__item">
              <div className="team__post">Web designer</div>
              <div className="team__name">Inna Sokol</div>
            </li>

            <li className="team__item">
              <div className="team__post">Developer</div>
              <div className="team__name">Mark Spensor</div>
            </li>

            <li className="team__item">
              <div className="team__post">Developer</div>
              <div className="team__name">Nikita Kholod</div>
            </li>

            <li className="team__item">
              <div className="team__post">Developer</div>
              <div className="team__name">Slava Zubrin</div>
            </li>
          </ul>
        </div>
      </section>

      <section className="clients">
        <div className="container">
          <h2 className="title-h2">Clients</h2>
          <ul className="clients__list">
            <li className="clients__item">
              <img src={require("../../resourses/img/services/clients/1.png")} alt="lexus" />
            </li>
            <li className="clients__item">
              <img src={require("../../resourses/img/services/clients/2.png")} alt="bmw" />
            </li>
            <li className="clients__item">
              <img src={require("../../resourses/img/services/clients/3.png")} alt="google" />
            </li>
            <li className="clients__item">
              <img src={require("../../resourses/img/services/clients/4.png")} alt="toyota" />
            </li>
            <li className="clients__item">
              <img src={require("../../resourses/img/services/clients/5.png")} alt="avon" />
            </li>
            <li className="clients__item">
              <img src={require("../../resourses/img/services/clients/6.png")} alt="microsoft" />
            </li>
            <li className="clients__item">
              <img src={require("../../resourses/img/services/clients/7.png")} alt="mersedes" />
            </li>
            <li className="clients__item">
              <img src={require("../../resourses/img/services/clients/8.png")} alt="pfizer" />
            </li>
            <li className="clients__item">
              <img src={require("../../resourses/img/services/clients/9.png")} alt="lilly" />
            </li>
            <li className="clients__item">
              <img src={require("../../resourses/img/services/clients/10.png")} alt="lamborgini" />
            </li>
          </ul>
        </div>
      </section>
      </>
  );
};

export default ServicesPage;
