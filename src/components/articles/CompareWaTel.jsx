import React from "react";
import "./Articles.css";
import WAvsTel from './images/article-img3.jpg'

const CompareWaTel = () => {
  return (
    <div className="ar-container">
      <div className="ar-cont">
        <p className="ar-title">
          Comparingthe Features of WhatsApp and Telegram
        </p>
        <div className="ar-credit">
          <a
            href="https://github.com/Sasmeee"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tue June 13 2023 - By Sasmitha Ashinsana
          </a>
        </div>
        <div className="ar-content">
          <p>
            WhatsApp and Telegram are two of the most popular messaging apps
            available today, with millions of users around the world. Both apps
            offer a wide range of features that make it easy to stay in touch
            with friends and family, but they differ in some important ways. In
            this article, we'll take a closer look at the features of WhatsApp
            and Telegram, and compare them to help you decide which app is right
            for you.
          </p>
          <div className="ar-img">
            <img src={WAvsTel} alt="ArticleImages" />
          </div>
          <p>
            WhatsApp is known for its simplicity and ease of use. The app allows
            you to send text messages, voice messages, photos, and videos to
            your contacts, and also offers group chats and voice and video
            calling. One of the standout features of WhatsApp is its end-to-end
            encryption, which ensures that your messages and calls are private
            and secure. The app also offers a range of customization options,
            such as the ability to set a custom chat wallpaper and notification
            tones.
          </p>
          <p>
            Telegram, on the other hand, is known for its advanced features and
            flexibility. The app offers all of the basic messaging features, as
            well as some unique ones, such as secret chats that are fully
            encrypted and self-destruct after a set amount of time. Telegram
            also allows you to create channels for broadcasting messages to a
            large audience, as well as groups with up to 200,000 members.
            Additionally, the app offers a range of customization options, such
            as the ability to create custom themes and use animated stickers.
          </p>
          <p>
            When it comes to security and privacy, both WhatsApp and Telegram
            take user data protection seriously. WhatsApp's end-to-end
            encryption ensures that only you and the person you're communicating
            with can read your messages and view your calls. Telegram also
            offers end-to-end encryption for secret chats, and all other
            messages are stored on their servers, which are located in multiple
            countries around the world for added security.
          </p>
          <p>
            In conclusion, both WhatsApp and Telegram offer a wide range of
            features that make it easy to communicate with others, but they
            differ in some important ways. If you're looking for a simple,
            secure messaging app with basic features, WhatsApp is a great
            choice. On the other hand, if you're looking for a more flexible app
            with advanced features and customization options, Telegram is the
            way to go. Ultimately, the choice between these two apps will depend
            on your specific needs and preferences.
          </p>
        </div>
        <div className="ar-source">
          <p>Sources:</p>
          <a
            href="https://www.whatsapp.com/stayconnected"
            target="_blank"
            rel="noopener noreferrer"
          >
            1. "WhatsApp Features." WhatsApp, WhatsApp Inc.
          </a>
          <br />
          <a
            href="https://telegram.org/features."
            target="_blank"
            rel="noopener noreferrer"
          >
            2. "Telegram Features." Telegram, Telegram Messenger LLP
          </a>
          <br />
          <a
            href="https://beebom.com/whatsapp-vs-telegram-vs-signal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            3. "WhatsApp vs Telegram: Which Messaging App Should You Use?"
            Beebom, 30 May 2022
          </a>
        </div>
      </div>
    </div>
  );
};

export default CompareWaTel;
