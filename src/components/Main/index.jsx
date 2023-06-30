import styles from "./mainsection.module.scss";

import Thumbnail from "../../assets/images/image-web-3-desktop.jpg";
import RetroPCs from "../../assets/images/image-retro-pcs.jpg";
import TopLaptops from "../../assets/images/image-top-laptops.jpg";
import GamingGrowth from "../../assets/images/image-gaming-growth.jpg";

export default function Main() {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.left_side}>
          <div className={styles.img_wrapper}>
            <img src={Thumbnail} alt="thumbnail" />
          </div>
          <div className={styles.text_wrapper}>
            <div className={styles.title}>The Bright Future of Web 3.0?</div>
            <div className={styles.text}>
              <p>
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <div className={styles.btn_wrapper}>
                <span className={styles.btn}>READ MORE</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right_side_wrapper}>
          <div className={styles.right_side}>
            <div className={styles.sidebar_title}>New</div>
            <div className={styles.news_wrapper}>
              <div className={styles.news}>
                <div className={styles.news_title}>
                  <span>Hydrogen VS Electric Cars</span>
                </div>
                <div className={styles.news_description}>
                  Will hydrogen-fueled cars ever catch up to EVs?
                </div>
              </div>
              <div className={styles.news}>
                <div className={styles.news_title}>
                  <span>The Downsides of AI Artistry</span>
                </div>
                <div className={styles.news_description}>
                  What are the possible adverse effects of on-demand AI image
                  generation?
                </div>
              </div>
              <div className={styles.news}>
                <div className={styles.news_title}>
                  <span>Is VC Funding Drying Up?</span>
                </div>
                <div className={styles.news_description}>
                  Private funding by VC firms is down 50% YOY. We take a look at
                  what that means.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.articles}>
        <div className={styles.article}>
          <div className={styles.article_left}>
            <img src={RetroPCs} alt="" />
          </div>
          <div className={styles.article_text_wrapper}>
            <div className={styles.article_number}>01</div>
            <div className={styles.article_title}>Reviving Retro PCs</div>
            <div className={styles.article_text}>
              What happens when old PCs are given modern upgrades?
            </div>
          </div>
        </div>
        <div className={styles.article}>
          <div className={styles.article_left}>
            <img src={TopLaptops} alt="" />
          </div>
          <div className={styles.article_text_wrapper}>
            <div className={styles.article_number}>02</div>
            <div className={styles.article_title}>Top 10 Laptops of 2022</div>
            <div className={styles.article_text}>
              Our best picks for various needs and budgets.
            </div>
          </div>
        </div>
        <div className={styles.article}>
          <div className={styles.article_left}>
            <img src={GamingGrowth} alt="" />
          </div>
          <div className={styles.article_text_wrapper}>
            <div className={styles.article_number}>03</div>
            <div className={styles.article_title}>The Growth of Gaming</div>
            <div className={styles.article_text}>
              How the pandemic has sparked fresh opportunities.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
