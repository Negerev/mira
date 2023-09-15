import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./../../style/privacy.scss";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
}, []);

  return (
    <section className="privacy">
      <div className="container">
        <h1>Privacy Policy</h1>
        <p>
          miracreative.org website administration is obliged to maintain your privacy on the Internet. The purposes, for which we collect your personal data are: improvement of our service, communication with visitors to this site, newsletters and
          for other actions listed below.
        </p>

        <h2>Personal data storage and processing</h2>
        <p>
          We collect and process your personal data only with your willing consent. With your permission, we can collect and process the following data: name and surname, e-mail address, phone number . Collection and processing of your personal
          information is carried out in accordance with the laws of the European Union and the USA.
        </p>

        <h2>Data storage, alteration, and removal</h2>
        <p>
          The user, who has provided miracreative.org with their personal data, has the right for their alteration and removal, as well as the right to recall the agreement to data processing. Time, during which your personal data will be stored is:
          time the personal data is used that is necessary for the website’s main activity. After finishing with the processing of your personal data, the website’s administration will permanently delete it. To access your personal data, you can
          contact the administration on: miracreative.org. We will be able to pass your data to a third party only with your willing consent. If the data was transferred to a third party, which is not associated with our organization, we cannot
          perform any changes to that data.
        </p>

        <h2>Processing of visiting technical data</h2>
        <p>
          Records of your IP address, time of visit, browser settings, operational system and other technical information is saved in the database when you visit miracreative.org. This data is necessary for the correct display of the website’s
          content. It is impossible to identify the person of the visitor using this data.
        </p>

        <h2>Children’s personal information</h2>
        <p>
          If you are a parent or a legal guardian of an underage child, and you know that the child has provided us with their personal information without your consent, please contact us on: miracreative.org. It is forbidden to enter personal data
          of underage users without the agreement of parents or lawful guardians.
        </p>

        <h2>Cookies processing</h2>
        <p>
          We use cookie files for the correct display of the website’s content and for the convenience of browsing miracreative.org. They are small files, that are stored on your device. They help the website to remember information about you, such
          as in which language you use the website and which pages have you already opened. This information will be useful in the next visit. Thanks to cookie files, the website’s browsing becomes much more convenient. You can learn more about these
          files here. You can set up cookies reception and blocking in your browser yourself. Inability to receive cookie files may limit the functionality of the website.
        </p>

        <h2>Processing of personal data by other services</h2>
        <p>This website uses third-party online services, which perform data collecting, independent from us.</p>
        <p>
          Data collected by these services may be provided to other services within those organizations. They can use the data for advertising personalization of their own advertising network. You can learn about user agreements of those
          organizations on their websites. You can also refuse their collection of your personal data. For example, Google Analytics Opt-out Browser Add-on can be found here . We do not pass any personal data to other organizations or services, which
          are not listed in this privacy policy. As an exception, the collected data may be provided on a lawful request of state authorities, that are authorized to request such information.
        </p>

        <h2>Links to other websites</h2>
        <p>
          Our website miracreative.org may contain links to other websites, which are not under our control. We are not responsible for the content of these websites. We recommend you familiarize yourself with the privacy policy of every website that
          you visit, if such policy exists.
        </p>

        <h2>Changes to the privacy policy</h2>
        <p>
          From time to time, our website miracreative.org may update our privacy policy. We inform about any changes to the privacy policy, placed on this webpage. We are monitoring any changes in legislation, which is related to personal data in
          European Union and USA. If you have entered any of your personal data on our website, we will inform you about the changes in our privacy policy. If your personal data, and more specifically, your contact information was entered
          incorrectly, we will not be able to contact you.
        </p>

        <h2>Feedback and final clauses</h2>
        <p>
          You can contact the administration of miracreative.org regarding any questions related to privacy policy on: mail@miracreative.org, or by filling a contact form specified in a corresponding section of this website. If you do not agree with
          this privacy policy, you cannot use the services of miracreative.org. In this case you should avoid visiting our website.
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
