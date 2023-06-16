import React from "react";
import "./Articles.css";
import POAImage01 from "./images/article-img1.jpg";
import POAImage02 from "./images/article-img2.jpg";

const PowerOfAI = () => {
  return (
    <div className="ar-container">
      <div className="ar-cont">
        <p className="ar-title">The Power of Artificial Intelligence</p>
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
            Artificial Intelligence (AI) is a powerful technology that has the
            potential to transform many aspects of our lives. AI refers to the
            ability of machines to perform tasks that would typically require
            human intelligence, such as recognizing speech, making decisions,
            and learning from data. With the help of AI, we can automate many
            tedious and repetitive tasks, analyze vast amounts of data quickly
            and accurately, and even create new products and services.
          </p>
          <p>
            One of the most significant benefits of AI is its ability to improve
            efficiency and productivity. By automating repetitive tasks, AI can
            free up time and resources that can be better used elsewhere. For
            example, in manufacturing, AI can be used to optimize production
            processes and reduce waste, leading to cost savings and increased
            output. In healthcare, AI can assist with diagnoses and treatment
            options, improving patient outcomes and reducing the workload of
            medical professionals.
          </p>
          <div className="ar-img">
            <img src={POAImage01} alt="ArticleImages" />
          </div>
          <p>
            Another benefit of AI is its ability to make predictions and
            identify patterns in data. By analyzing vast amounts of data, AI can
            identify trends and insights that would be impossible for humans to
            detect. This can lead to better decision-making in many fields, from
            finance and marketing to science and engineering.
          </p>
          <p>
            In conclusion, AI is a powerful technology that has the potential to
            transform many aspects of our lives. As the use of AI continues to
            grow, we can expect to see even more benefits in the future, from
            improved efficiency and productivity to better decision-making and
            new innovations.
          </p>
          <div className="ar-img">
            <img src={POAImage02} alt="ArticleImages" />
          </div>
          <p>
            As a summary, Artificial Intelligence (AI) is a powerful technology
            that has the potential to transform our lives. By automating tasks
            and analyzing data, AI improves efficiency and productivity while
            aiding in decision-making. It optimizes manufacturing processes,
            reduces waste, and enhances output. In healthcare, AI assists with
            diagnoses and treatment options, benefiting patients and lightening
            the workload of medical professionals. With its ability to identify
            patterns and make predictions, AI enables better decision-making in
            various fields. In conclusion, AI holds immense promise for improved
            efficiency, enhanced decision-making, and innovative advancements in
            the future.
          </p>
          <div className="ar-source">
            <p>Sources:</p>
            <a
              href="https://www.techopedia.com/definition/190/artificial-intelligence-ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              1. What is Artificial Intelligence (AI)?
            </a>
            <br />
            <a
              href="https://www.forbes.com/sites/forbestechcouncil/2021/03/02/the-benefits-of-artificial-intelligence-in-business/?sh=68be5b9e1d65"
              target="_blank"
              rel="noopener noreferrer"
            >
              2. The Benefits of Artificial Intelligence in Business
            </a>
            <br />
            <a
              href="https://www.healthcareitnews.com/news/future-healthcare-ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              3. The Future of Healthcare with AI
            </a>
          </div>
          <p className="ar-quoto">
            Fun fact : <span>This article also genetated using AI</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PowerOfAI;
