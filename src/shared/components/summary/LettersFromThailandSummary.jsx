import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import UseAnimations from '../../hooks/UseAnimations';

function LettersFromThailandSummary() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { slideLeft, fadeUp } = UseAnimations();

    return (
        <div className='m-3'>
            <div className="container bg-white p-4 border" style={{ textAlign: 'justify', marginTop: '5rem' }}>
                <div className='row'>
                    <div className='col'>
                        <motion.h1
                            className="mb-4 fw-bolder" {...slideLeft}
                            transition={{ duration: 0.4, ease: "easeInOut" }}>Letters from Thailand
                        </motion.h1>

                        <motion.h2
                            className="mb-4 fw-bold" {...slideLeft}
                            transition={{ duration: 0.6, ease: "easeInOut" }}>By Botan
                        </motion.h2>

                        <motion.h3
                            className="mt-4 fw-semibold text-center" {...slideLeft}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                        >Summary
                        </motion.h3>

                        <motion.div
                            {...slideLeft}
                            transition={{ duration: 1, ease: "easeInOut" }}>
                            <h4>Note</h4>
                            <ul>
                                <li>There might be mistakes in this summary, as I compiled it quickly as a note to help me
                                    remember the story. </li>
                                <li>Reading the full story is still important to understand the details of the story. </li>
                                <li>The summary contains mainly the main events of the story.</li>
                            </ul>
                        </motion.div>

                        <motion.div className="accordion" id="accordionExample" {...fadeUp}>

                            {/* Letter 1 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <h5 className="fw-medium text-center">Letter #1</h5>
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">

                                        <p className="fs-5 pb-2">Suang U left China with two of his friends Kim and Seng. They left China to
                                            find a job so that they could earn more money and send it back to their family. The
                                            first letter shows us that Suang U is a runaway boy who left his hometown to follow his
                                            dream. He is going to Thailand because his friend Seng got a letter from his uncle
                                            telling him that it is easy to start a business in Thailand, and with the earnings of
                                            the business, he would have enough money to send home to his mother and also have enough
                                            left over to live off. </p>

                                        <p className="fs-5 pb-2">The letter shows that Suang U truly loves his mother, and as you can read,
                                            he pleads for forgiveness. Suang U tells his mother about a nice man that everybody
                                            likes who is on the boat with him. He has a square face and strong features. Lo Yong
                                            Chua talked to Saung U about whether Suang U can read or write. If Suang U can read,
                                            Yong Chua might be able to find Suang U a job. Suang U's mother taught Suang U to write.
                                        </p>

                                        <p className="fs-5 pb-2">Lo Yong Chua promised to find Suang U's job as a bookkeeper for his cousin
                                            Lo Nguan Thong. Saung U mentioned how his dad passed away, and Yong Chua mentioned how
                                            he lost his family. They bonded, and Nguan Thong asked if Saung U wanted to be his son.
                                            Saung U agreed, but he made it clear that he would keep his sae "Tan." </p>

                                        <p className="fs-5 pb-2">Suang U and Seng then get into a fight because Seng insulted Suang U's new
                                            Dad. Seng uses homophobic language toward Lo Yong Chua. Saung U punched Kim to show who
                                            the real man is.</p>

                                    </div>
                                </div>
                            </div>

                            {/* Letter 2 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <h5 className="fw-medium text-center">Letter #2</h5>
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className="fs-5 pb-2">Suang U and his friend, Kim, are safely in Lo Nguan Thong's household, which
                                            is in a Chinese neighborhood called <b>Sampheng Lane.</b> Suang U is confident about
                                            being a
                                            bookkeeper and forgets about his friend Kim. When Seng saw his uncle at the port, he
                                            told his uncle that the two friends betrayed him, and he turned his back on them. Suang
                                            U and Kim realized that they wouldn't get a job from Tae Lim; however, his father got
                                            his back. Suang U also promised to find a job for Kim as well.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Letter 3 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        <h5 className="fw-medium text-center">Letter #3</h5>
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className="fs-5 pb-2">His intention for this letter is to describe his surroundings and living
                                            conditions to his mother. Suang U starts the letter by telling his mother about his new
                                            surroundings. He tells her that he lives in a store with Nguan Thong, his wife, and
                                            their two daughters. The whole building is devoted to the storage of incoming
                                            merchandise. The store is in the middle of a row of houses was pretty much the same
                                            thing happens the neighbors have their businesses. At the back of their house, they have
                                            a canal. Business is conducted on the river like sweet selling and that sort of stuff.
                                            He shares an opinion about how the men work hard so that they have to eat first while
                                            the leftover is kept for the women. Suang u didn't like it at all. <b>(Life in Bangkok)
                                                (Women eat separately) (When you're the boss u can do anything) (The idea of
                                                trading,
                                                good soil).</b> Kim got offered a job.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Letter 4 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        <h5 className="fw-medium text-center">Letter #4</h5>
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className="fs-5 pb-2">This is his second day in Bangkok. At 4 AM, they have to wake up and take a
                                            bath at the Klong so that the heat won't remain in their body. He also showed them how
                                            to wear phakhaoma. They finished, and as they hurried to the house, Suang U heard
                                            something, he looked up and found himself staring at a girl's face. Kim told him that it
                                            was one of Nguan Thong's daughters. Suang U compliments her beauty. He is a good friend
                                            because when he receives his first salary in advance, he sends half to his mother and
                                            the rest to Kim so that he will not know and won't be disappointed. Saung U found out
                                            that Tae Lim is an old friend of Nguan Thong and also a customer. Suang U worry that
                                            Seng might use this power to get him fired.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Letter 5 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        <h5 className="fw-medium text-center">Letter #5</h5>
                                    </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className="fs-5 pb-2">Suang u started the letter by mentioning that he would spend an hour every
                                            day teaching Chinese to Ngun Thong's two daughters. He keeps comparing one of the
                                            daughters to the Moon. He offered to teach Chinese and Literature to his boss'
                                            daughters. It started with one of the daughters, the small and dark one who is only 16
                                            years old, asking about some Chinese words to her father. Her father didn't know, so he
                                            asked Suang U. Suang U knew the words. The young girl insisted that she was bored and
                                            should learn the language, so she asked her father to allow Suang U to teach both
                                            sisters. He still thinks about Moon's face and the thought of being in the same room
                                            with her.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Letter 6 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                        <h5 className="fw-medium text-center">Letter #6</h5>
                                    </button>
                                </h2>
                                <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className="fs-5 pb-2">He was annoyed by his boss's presence while teaching. If he's busy, his wife
                                            will take his place. The little daughter's name is "Ang Buai," and she seems to be a
                                            talkative one, and she always talks to Suang U about that. One time she suggested that
                                            it would be fun to learn Thai, and her father disagreed. The older girl's name is "Mui
                                            Eng." She seems to be the quiet one and rarely shows emotion or reaction. Suang U refers
                                            to her as the beautiful one. Suang U also shared his opinion on learning Chinese as
                                            well. Unless Chinese study is not neglected, then it should be okay. All the coolies
                                            gossip about how close Suang U and Ang Buai are.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Letter 7 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                        <h5 className="fw-medium text-center">Letter #7 - [Moon Festival]</h5>
                                    </button>
                                </h2>
                                <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className="fs-5 pb-2">The neighbor celebrated the Moon Festival. Thai people made fun of the
                                            Chinese moon festival culture. They said that the Moon is not alive. According to
                                            science, it's just a lifeless star. Suang U thinks that the festival is lovely. Then, he
                                            and Kim saw Seng standing across the street. Seng seems to have his eyes on Mui Eng. At
                                            their learning session, Mui Eng proposed to learn a new book [a love story].</p>
                                    </div>
                                </div>
                            </div>

                            {/* Letter 8 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                        <h5 className="fw-medium text-center">Letter #8</h5>
                                    </button>
                                </h2>
                                <div id="collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className="fs-5 pb-2">Today, Kim refused to get up, so Saung U took a shower at the canal alone.
                                            He glanced at the kitchen, and Mui Eng was there, but she didn't pop back in as usual.
                                            Suang U still admires her beauty. She came out and gave Saung U a pink cloth to wipe his
                                            face. He saw a bracelet pinned to one corner of the cloth. Mui Eng left immediately.
                                            Suang U gets his hope up, but then
                                            criticizes Mui Eng behavior that she shouldn't do something like that as a woman. Kim
                                            came outside, and he hurried past Kim into the house.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Letter 9 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                        <h5 className="fw-medium text-center">Letter #9</h5>
                                    </button>
                                </h2>
                                <div id="collapseNine" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className="fs-5 pb-2">Seng visits Nguan Thong's house with his uncle today. Nguan Thong and Tae
                                            Lim asked both of them to greet each other. Suang U is happy that he wasn't born a Thai,
                                            so he doesn't have to wai him. A couple of next doors are arguing with each other. The
                                            husband is a drunkard, and he always drinks. The money he has, the drunker he gets. All
                                            the coolies like drinking. Whenever they get their money, they always spend it on
                                            drinking and not on their wives and family. Suang U wants to respect Thai people, but he
                                            can't find any qualities to respect them. At their learning session today, Suang U was
                                            afraid that the jade bracelet may be the cause of the trouble. Ang Buai brings up the
                                            jade bracelet and says that she wants to trade her ring for the bracelet. Suang U keeps
                                            on complimenting Mui Eng beauty. He loved her at first sight.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Letter 10 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                        <h5 className="fw-medium text-center">Letter #10</h5>
                                    </button>
                                </h2>
                                <div id="collapseTen" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">

                                        <p className="fs-5 pb-2">Suang U expects to have a letter from his mother. There is an argument in
                                            the household. Mui Eng and her mother argued about the Jade bracelet. Ang Buai wanted to
                                            trade the bracelet for her ring. Mui Eng won't agree. Thaokae Nia went to her husband,
                                            and the argument seemed to get bigger. Suang U tries not to pay attention to the
                                            argument and focus on his work. </p>

                                        <p className="fs-5 pb-2">Nguan Thong doesn't like Thai when his wife says that he is more like a
                                            Thai. They went up to search again and couldn't find it. Her father lectured her about
                                            being a wife in the future. Speaking of getting married, Nguang Thong told Mui Eng that
                                            his friend Lim (Seng's uncle) wants Mui Eng to be with Seng. </p>

                                        <p className="fs-5 pb-2">Suang U was stunned and painful. He feels hopeless again because he thinks
                                            that he doesn't have anything to compete with Seng. Mui Eng has nothing to say about
                                            this. Suang U thought that Mui Eng might just play games with him. They decided to bring
                                            Seng to the house soon. Mui Eng told her father that if she didn't like him, he wouldn't
                                            force her to marry him. They think that she just wants to have a chance to fall in love.
                                        </p>

                                    </div>
                                </div>
                            </div>

                            {/* Letter 11 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                                        <h5 className="fw-medium text-center">Letter #11</h5>
                                    </button>
                                </h2>
                                <div id="collapseEleven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className="fs-5 pb-2">Suang U caught up with his father after he took a long trip. They discussed
                                            many topics <b>[politics],</b> but the one that interests Suang U the most is his
                                            teaching and
                                            someone asking for Mui Eng's hands. Yong Chau revealed that Mui Eng is not impressed by
                                            Seng. Ang Buai had something up her sleeve as she planned to ask him many questions to
                                            challenge him. Mui Eng wants to marry someone who is better educated than her. Yong Chau
                                            mentioned gender roles and what women should do. Suang U loved his father based on his
                                            word.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Letter 12 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                                        <h5 className="fw-medium text-center">Letter #12</h5>
                                    </button>
                                </h2>
                                <div id="collapseTwelve" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className="fs-5 pb-2">Mui Eng dresses hideously and waits to ask Seng questions. Mui Eng plans to
                                            ask Seng a lot of questions. Nguan Thong asked Suang U to go with him to take a boat to
                                            Khlong Bang Luang. Suang U thought that Nguan Thong might kill him. He thought Ngaun
                                            Thong might know something secret. After a long conversation, Yong Chua tells Suang U
                                            that he wants Mui Eng to be his daughter-in-law. Nguan Thong decided to give Mui Eng's
                                            hands to Suang U. Thaokhe, and Suang U talked about Thai people sifting (taking stuff
                                            from the river ground rather than working). He closed the letter by telling his mother
                                            that he will gain a new daughter-in-law and she will get grandchildren soon.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Letter 13 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
                                        <h5 className="fw-medium text-center">Letter #13 - [Engagement]</h5>
                                    </button>
                                </h2>
                                <div id="collapseThirteen" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className="fs-5 pb-2">In this letter, Suang U mentioned that he got engaged with Mui Eng. He
                                            mentioned a lot about Thai tradition and said that it is complicated. They criticized
                                            their tradition again. He criticized it but still follow the tradition. Sugar daddy
                                            decided to stop working and rent a house next to Nguan Thong. Suang U was pleased about
                                            this. Then, Saung U and Kim talked about how everyone jealous of him, including Seng.
                                            Suang U mentions his plan of doing business. Nguan Thong still doesn't know about the
                                            whole thing, and Suang U hopes that Nguan Thong won't despise him.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Letter 14 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseForteen" aria-expanded="false" aria-controls="collapseForteen">
                                        <h5 className="fw-medium text-center">Letter #14 - [Wedding Day]</h5>
                                    </button>
                                </h2>
                                <div id="collapseForteen" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className="fs-5 pb-2">He missed his mother a lot on his wedding day. He felt alone. Before his
                                            wedding day, he saw Seng. Kim said that Seng cursed Suang U a lot, and Seng even said
                                            that Suang U stole his fiancé. Then, he vowed revenge on Suang U. Suang U also mentioned
                                            that he's a little afraid of her, but he will have her learn that he is her master
                                            despite anything else. He feels like they have spent too much money on the wedding.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Letter 15 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFifteen" aria-expanded="false" aria-controls="collapseFifteen">
                                        <h5 className="fw-medium text-center">Letter #15</h5>
                                    </button>
                                </h2>
                                <div id="collapseFifteen" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className="fs-5 pb-2">Suang U mentioned how his life has changed since he got married to Mui Eng.
                                            Mui Eng remains in the room for the entire three days until the evening. Then, they
                                            visit their parents' house. Ang Buai wants her father to take Sunday off like Thais.
                                            Thai spend more and work less. On the last day of the year, offer pork, food to gods,
                                            ancestors at 11, and the ghost at late afternoon. Ang Buai keeps bringing up the
                                            bracelet, but Nguan Thong says this is enough. Her father does not give any value to her
                                            daughters. All sons are perfect. Her father said even the most useless son is more
                                            useful than a daughter. "You women! Do you want this money, or would you rather stand
                                            here and argue?" Nguan Thong discovers the truth about the bracelet, but he doesn't
                                            mind.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Letter 16 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseSixteen" aria-expanded="false" aria-controls="collapseSixteen">
                                        <h5 className="fw-medium text-center">Letter #16 - [New Year]</h5>
                                    </button>
                                </h2>
                                <div id="collapseSixteen" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className="fs-5 pb-2">My Father-in-law is sick and does not go to foreign doctors. He tried to use
                                            an ancient cure. Ang Buai tried to convince him. Everyone gossips about Suang U taking
                                            over the business (Inheritance). Because Nguan Thong was sick, Suang U had to train Ang
                                            Buai to be in charge of the business. Kim argued with Suang U that Suang U spent so much
                                            time with Ang Buai. Kim also thinks that it is a bad idea to take orders from a girl.
                                            Suang U spent so much time with Ang Buai because he had to train her.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Letter 17 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseSeventeen" aria-expanded="false" aria-controls="collapseSeventeen">
                                        <h5 className="fw-medium text-center">Letter #17</h5>
                                    </button>
                                </h2>
                                <div id="collapseSeventeen" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className="fs-5 pb-2">There are so many problems mentioned in this letter. Saeng is angry at Ang
                                            Buai and bullies her (she holds back her tears, please don't tell anyone), so Suang U
                                            asks Kim not to leave her alone. Later on, Mui Eng questioned why Suang U helped Ang
                                            Buai even when Suang was sick. Mui Eng got mad. So, Mui Eng runs to her father's house
                                            and starts shouting Ang Buai's name. Mui Eng was jealous of Ang Buai and said that her
                                            sister flirts with her husband. Ang Buai mentioned how Mui Eng threw herself at Suang U.
                                            Ang Buai admitted that she had seen her sister throw the jade bracelet. Suang U warns
                                            her that he'll get a new Thai wife from the bar.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Letter 18 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseEighteen" aria-expanded="false" aria-controls="collapseEighteen">
                                        <h5 className="fw-medium text-center">Letter #18</h5>
                                    </button>
                                </h2>
                                <div id="collapseEighteen" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className="fs-5 pb-2">There is some good news in this letter. Mui Eng is pregnant. Moreover, the
                                            guy who bullies Ang Buai has never come back. Ang Buai did a good job in managing the
                                            business. Suang U runs to tell his daddy-in-law, who admits that Ang Buai has been doing
                                            a good job, but it's not like she can go out at night. Suang U and Nguan Thong want
                                            their son to be a boy. A girl will carry other men's names. They are arguing about the
                                            capabilities and abilities of a boy and a girl. Ang Buai is an example.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Letter 19 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseNineteen" aria-expanded="false" aria-controls="collapseNineteen">
                                        <h5 className="fw-medium text-center">Letter #19</h5>
                                    </button>
                                </h2>
                                <div id="collapseNineteen" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className="fs-5 pb-2">Suang U compares life in China and Thailand (insect vs. customers – buy on
                                            credit). He visited a Thai family for money, meeting the wife who points to meeting her
                                            husband gambling. Suang U criticized how the husband works again. Despite all of this,
                                            the business went well.</p>
                                    </div>
                                </div>
                            </div>
                            {/* Letter 20 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwenty" aria-expanded="false" aria-controls="collapseTwenty">
                                        <h5 className="fw-medium text-center">Letter #20</h5>
                                    </button>
                                </h2>
                                <div id="collapseTwenty" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p className="fs-5 pb-2">Now Ang Buai only sells over the counter and not wholesale anymore. Mui Eng
                                            wants to find her a husband. Suang U visits his dad, who says that he'll transfer the
                                            customers to him, and he talks about Chinese being one family. His mother-in-law talks
                                            to him about emotions during pregnancy. He must not scold his wife during pregnancy.
                                            Suang Y is a bit embarrassed by taking all Nguan Thong customers. He thinks that he has
                                            to work harder to prove that he's worth it. Suang U has to work as twice as hard based
                                            on Yong Chua. Suang U and Yong Chua have a dream of owning their factory. Suang U finds
                                            it overwhelming as he is just a farmer from a small village.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Letter 21 - 30 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwentyOne" aria-expanded="false" aria-controls="collapseTwentyOne">
                                        <h5 className="fw-medium text-center">Letter #21 - #30</h5>
                                    </button>
                                </h2>
                                <div id="collapseTwentyOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">

                                        <p className="fs-5 pb-2">The Autumnal Feast Day is coming, and Suang U's and his adoptive father's
                                            business is doing well due to the customers given by his father-in-law, so everyone is
                                            exhausted. However, Suang U feels a little guilty about being profited from his
                                            father-in-law's business. What bothers him the most now is having to pay his alien tax
                                            to the government since the government officials are very corrupt and have bad
                                            attitudes.</p>

                                        <p className="fs-5 pb-2">Two months later, the new business that Ang Buai manages is doing well, and
                                            Suang U kind of likes the new store also when he visits the store, but Muy Eng does not
                                            want to visit her parents since she's embarrassed about her appearance. These days, he
                                            starts to argue a lot with his wife about their future and raising children. While Muy
                                            Eng wants fewer children, her husband wants more, and he's very mad when she brings up
                                            the idea of what he calls "the devil's medicine".</p>

                                        <p className="fs-5 pb-2">Finally, the birth of the baby is coming soon, and Suang U is frustrated and
                                            drunk and even bothers the midwife from time to time since she does not allow him to see
                                            his wife in labor. He starts to emphasize the pain his wife is going through. In the
                                            end, the baby has arrived, and he's happy that it's a boy.</p>

                                        <p className="fs-5 pb-2">His son is healthy, while his father-in-law is very ill. Before his death,
                                            his coffin and his funeral are handled by Ang Buai, and despite her success he still
                                            wants his younger daughter to get married. His last wish is to teach the next generation
                                            to love their cultures and traditions. Finally, he dies five days before the New Year's
                                            Day. When it comes to the mother-in-law's announcement about her husband's will, Ang
                                            Buai gets a bigger share since it includes the business also, so when Muy Eng gets home,
                                            she's furious about the fact that her husband left her son with nothing and suggest that
                                            they should use it for the factory that Yong Chua is always talking about.</p>

                                        <p className="fs-5 pb-2">Everything is more expensive now that the war is over, and the father and
                                            son decide on the investment in the factory. However, the process is costly and
                                            time-consuming, but he convinces his father that they will earn it back later on. His
                                            father believes that it is better to sell the products at a low price, which does not
                                            rip off their customers and attracts more. Eventually, their business is almost fully
                                            set up and its name is "Loet Rot" in Thai and <b>"Lo Buan Chai Heng"</b> in Chinese, but
                                            he continues working to sustain his father-in-law's business.</p>

                                        <p className="fs-5 pb-2">Kim has been seeing a girl, named "Chaba", who works in Muy Eng's store. He
                                            asks her to marry him, and Suang U promises to help him out. Now, Suang U and his wife
                                            are expecting a second child. After the wedding, Suang U and Kim fight over whether
                                            their family still lives in the village in China. There's also another fight, between
                                            Suang U and his wife, about him helping Kim start his own business. One day, Chaba's
                                            father dies, and Suang U is very curious about the Thai funeral.</p>

                                        <p className="fs-5 pb-2">Weng Khim starts walking and spends so much time with Kim and his wife who
                                            cook Thai food for the family, but Suang U doesn't seem to like it, and he mostly
                                            complains about the food, even the radios, which always advertise products, and the new
                                            hairstyles. The second baby is coming named Chui Kim. Suang U again complains about the
                                            Thai baby clothing and decides to buy his wife a sewing machine, but her sister gets a
                                            new car which everyone enjoys except Suang U and his mother-in-law.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Letter 31 - 40 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwentyTwo" aria-expanded="false" aria-controls="collapseTwentyTwo">
                                        <h5 className="fw-medium text-center">Letter #31 - #40</h5>
                                    </button>
                                </h2>
                                <div id="collapseTwentyTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">

                                        <p className="fs-5 pb-2">Suang U is mad at Kim for gambling, and they are angry at each other because
                                            Thai joked about the Chinese being stingy. He no longer trusts Kim. He’s thinking of
                                            moving to live near the factory, but his business might be lost to Seng whom he hates.
                                            He visits Li San to transfer the accounts of customers and gets to sell his boats. There
                                            is a shop (bakery) for sale, and everyone is moving. The third grandchild is on the way.
                                        </p>

                                        <p className="fs-5 pb-2">Seng and Suang U finally let everything out (the dirt, the jealousy, and the
                                            stop). We learn that Kim and Chaba are not here anymore. Mui Eng is looking for new help
                                            that she can trust because the old one steals her stuff but gets caught by the police.
                                            (Suang U’s surprised by the police work). The business is not doing well, and the father
                                            is trying to explain using logic while Thaokae Nia and Mui Eng explain using
                                            superstition, which causes Mui Eng to argue with Ang Buai</p>

                                        <p className="fs-5 pb-2">The 3rd child is here and named Bak Li (not as strong). Weng Khim begins to
                                            be naughty even Sai cannot stand. Suang U takes him to see Kim and Chaba with a baby
                                            girl with a gift of gold. They start to talk about Seng’s upcoming wedding. While the
                                            business is doing well, Suang U worries about Weng Khim learning Thai, and he believes
                                            that it is okay to learn Thai, but Weng Khim should remember that he is Chinese.</p>

                                        <p className="fs-5 pb-2">Weng Khim is pretty much scheduled and controlled by Suang U, so he likes
                                            Ang Buai, who sometimes picks him up from school. Everyone gets the invitation to Seng’s
                                            wedding (married to a friend of Ang Buai’s). The fourth child is coming, and Mui Eng
                                            fell in the bathroom, so she cannot have any more children. The fourth baby is a girl,
                                            and Suang U is very upset, and he’s drinking.</p>

                                        <p className="fs-5 pb-2">A houseful of girls. How does a man raise a houseful of girls these days?
                                            Look at their aunt! (Or their mother, throwing a bracelet through the kitchen window to
                                            her father’s penniless clerk.) How much worse will it be in fifteen years? Boat (mother)
                                            or oar (baby), but he doesn’t even want the oar. Suang U complains about Thai people’s
                                            irresponsibility and backstabbing each other, but he sees a young boy who works hard
                                            named Iu Kieng.</p>

                                        <p className="fs-5 pb-2">Mui Eng decides to name the baby girl Meng Chu, which Suang U shows no
                                            interest in. Suang U noticed that Mui Eng is getting older physically, and he smokes
                                            now. He’s seen his first movie kids’ Problem in the theater. He learned about beggars
                                            and renting babies. People! Whatever is the matter with them? For a few coins. some
                                            would debase themselves that far. Were they brought up with no religious training at
                                            all? Do they feel no shame? I never in my life heard of anything so vile as stealing
                                            infants to rent them out. How lazy can a man let a baby earn his rice? Even cripples do
                                            useful work, those who are determined and have self-respect. I have seen legless men do
                                            an honest day’s work with their hands.</p>

                                        <p className="fs-5 pb-2">He went to the shrine with Mui Eng and saw the opera company where kids grew
                                            up not knowing Thai. According to my informant, it is not an atmosphere of employer and
                                            employees, but a family that looks to grandfather for advice and authority and rewards
                                            justly due. What could be more sensible? He meets the ‘freak.’</p>
                                    </div>
                                </div>
                            </div>

                            {/* Letter 41 - 50 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwentyThree" aria-expanded="false"
                                        aria-controls="collapseTwentyThree">
                                        <h5 className="fw-medium text-center">Letter #41 - #50</h5>
                                    </button>
                                </h2>
                                <div id="collapseTwentyThree" className="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">

                                        <p className="fs-5 pb-2">Suang U is working on his Thai for better business and living, but only when
                                            his kids are not there, and he also begins to be interested in Thai literature (read his
                                            kid's books and novels). He learned about China's news and allowed his first daughter
                                            Chui Kim to go to school. Weng Khim complains about learning Chinese but is good at
                                            math. </p>

                                        <p className="fs-5 pb-2">Weng Khim changed a lot to be more troublesome, according to Suang U. He
                                            learned more problems about China and many things about the government. He's upset that
                                            Mui Eng badmouths about his mom in front of his kids. Since Weng Khim failed the exam,
                                            he's bashing the school for not valuing customer service skills, and the school
                                            encourages students to work something better than their parents' jobs. (Look down on
                                            people who do not send their children to school, and then complain about the school).
                                        </p>

                                        <p className="fs-5 pb-2">The business is doing well to the point they cannot cater to the demand.
                                            Weng Khim gets a fever (pneumonia) from playing in the rain, and Yong Chua volunteers to
                                            look after him. When the kid gets better, Yong Chua gets worse. The doctor wants him to
                                            eat something more nutritious, not the sick man's diet. Then, he dies. </p>

                                        <p className="fs-5 pb-2">He decides to integrate Thai culture into his father's funeral (he calls it
                                            Buddhist tradition). Now he's sick, and he's working too hard. He always has the same
                                            nightmare (everyone dies, and he grins). Kim visited him and talked about his new
                                            restaurant and Chaba's hemorrhoid, then bashed Thai food.</p>

                                        <p className="fs-5 pb-2">Mui Eng wants a car, and everyone loves it except Suang U, so she uses her
                                            father's money to buy it. His definition of happiness and Hers and Weng Khim's. Chui Kim
                                            is good at housework, and Weng Khim is good at the store. Meng Chu kind of looks like
                                            Suang U's Mom.</p>

                                        <p className="fs-5 pb-2">Weng Khim quits Thai school and only studies Chinese with a Teacher from
                                            Shanghai. Who caused the girl to say such things to WK? Chui Kim is doing very well at
                                            school. And the breakfast table conversation is disastrous. Bak Li wants to be the
                                            beauty queen. And what's wrong with that? He starts to fall in love with his youngest
                                            child.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Letter 51 - 60 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwentyFour" aria-expanded="false"
                                        aria-controls="collapseTwentyFour">
                                        <h5 className="fw-medium text-center">Letter #51 - #60</h5>
                                    </button>
                                </h2>
                                <div id="collapseTwentyFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">

                                        <p className="fs-5 pb-2">Ang Buai forgives Suang U for what he said to her because Mui Eng sent a
                                            Pekingnese dog as an apology gift. There is a story of a man beating up his mother which
                                            disgusts Suang U. Moreover, this makes Suang U miss his mother even more and want to
                                            take care of her. </p>

                                        <p className="fs-5 pb-2">The children wanted to stop eating rice from the rice bowl, and they wanted
                                            to use knives, forks, and plates like their friends. Suang U rejected. Ang Buai wears a
                                            new kind of sarong (hoop skirt). It's belted at the waist and flares out at the bottom
                                            like a bamboo basket. Suang U thinks that it is a waste of cloth. </p>

                                        <p className="fs-5 pb-2">Weng Khim asks permission to go to his friend's birthday, and he also wants
                                            to celebrate one too. Suang U likes Meng Chu. Without chatting with her for one day, he
                                            feels like it's not a warm day for him. Suang U buys an expensive TV which surprises
                                            everyone because he spent money on something. Before buying the TV, Suang U made all the
                                            children promise not to spend too much time on the TV. </p>

                                        <p className="fs-5 pb-2">Kim and Seng take Suang U out to a club for the first time in Suang U's
                                            life. Suang U visits Kim's restaurant to talk to his old friend and catch up with each
                                            other about what's going on in their life. Suang U wanted to set up Kha Hieng with Weng
                                            Khim. Kha Hieng is the daughter of Kim. </p>

                                        <p className="fs-5 pb-2">Thoakae Nia passed away due to a heart attack. The children don't have close
                                            bonds with their grandmother, so they don't show much grief. The trade and diplomatic
                                            relations between China and Thailand are not good which creates trouble for Suang U's
                                            business. A man contacts Suang U to join him in smuggling goods into Thailand which can
                                            make a lot of profits. Suang U rejected.</p>

                                    </div>
                                </div>
                            </div>

                            {/* Letter 61 - 80 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwentyFive" aria-expanded="false"
                                        aria-controls="collapseTwentyFive">
                                        <h5 className="fw-medium text-center">Letter #61 - #80</h5>
                                    </button>
                                </h2>
                                <div id="collapseTwentyFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">

                                        <p className="fs-5 pb-2">Suang U was offered a directorship in the Society of Chinese Merchants. The
                                            name of the members must be Thai, so most Chinese people apply for citizenship for the
                                            kids. One day, the parents arrange a meeting between Weng Khim and Rose, but he doesn't
                                            like her due to her appearance and cursing, but Mui Eng thinks that cursing is loving in
                                            some families. However, All Weng Khim wants is a brother, so Kim suggests Suang U have
                                            another wife.</p>

                                        <p className="fs-5 pb-2">Society has changed a lot, and children are no longer obligated to take care
                                            of their parents, which makes Suang U afraid of loneliness in old age. Now he's in Hua
                                            Hin. He feels uncomfortable with women's fashion and how young people behave, so he is
                                            worried about the kids, who grow up so fast, and Meng Chu grows to be more like her
                                            aunt. There have been some fire incidents that caused millions worth of damage, and
                                            hundreds of homes were lost maybe due to tenants being evicted or insurance money. So
                                            now there is a stricter law and penalty for arson and selling of heroin, and now there
                                            is even a public execution.</p>

                                        <p className="fs-5 pb-2">Due to the recession, the business is not doing well either, but Suang U
                                            believes the reason might be the change in customer's taste. Everyone follows the Farang
                                            and Japanese cultures. Family members are no longer entertained by one another but
                                            instead by television, movies, opera, and massage parlors.</p>

                                        <p className="fs-5 pb-2">Meng Chu wants to stay in school but her father denies so she refuses to go
                                            back home. Ang Buai argues with Suang U about keeping Meng Chu and hurts his feelings
                                            about not wanting her in the first place.</p>

                                        <p className="fs-5 pb-2">Suang U's hope to return to China seems to be impossible day by day due to
                                            the fear of being arrested and the thought of the difficult lifestyle in China. The
                                            regulations are tougher now, and only big firms are capable enough to petition for
                                            exclusive national control of particular products, so Suang U can't compete with them.
                                            Sadly, he loses some money to "Len Share", an investment plan. There are more ways to
                                            make money now by withdrawing large sums of money from a bank to lend it at a very high
                                            rate, which seems to be unethical, and by the Indian "selling on time" scheme that
                                            allows you to pay a certain amount of money every month with some interests. Weng Khim
                                            is smoking now, which causes some conflicts with his father.</p>

                                        <p className="fs-5 pb-2">Suang U again feels uncomfortable with the new women's fashion sense and
                                            plastic surgeries, and again everyone is nagging about Ang Buai's marriage until she
                                            spills some of her secrets about a short guy she likes.</p>

                                        <p className="fs-5 pb-2">Weng Khim now stops smoking but all the girls are now very into the new
                                            fashion and trend. One day, his kids all go to change their names legally. While the
                                            government is involved in changing the surname, the kids are allowed to choose their own
                                            given names.</p>

                                        <p className="fs-5 pb-2">One day he sees Chui Kim talking with a boy and he is furious. What makes
                                            him angrier is the fact that Chui Kim is sponsored to compete in a beauty pageant.
                                            Surprisingly, he lectures the girls about how good his sister-in-law is as a
                                            businesswoman and not someone who abuses her freedom. Now the business and the market
                                            are more competitive as they have promotions and advertisements such as a lucky draw,
                                            quite similar to gambling, which was illegal at the time.</p>

                                        <p className="fs-5 pb-2">Chui Kim will be married soon to Seng Huat, who is very picky about his
                                            future wife but falls in love with Chui Kim the moment he sees her. Unfortunately,
                                            according to tradition, the bride's family does not go to the wedding. However, Ang Buai
                                            managed to do so with the kids. Bak Li came back home from the wedding with some stories
                                            of the practices that seemed weird to everyone in the house.</p>

                                        <p className="fs-5 pb-2">Suang U starts to worry about his other children's future such as the
                                            military draft and different ways to get his son out of it his Meng Chu now worries
                                            about her school, and he surprisingly becomes very supportive of her education and her
                                            goals. Weng Khim has become a big disaster for the family. He is drunk every night as
                                            Meng Chu reports, and after his father confronts him, he leaves the house with his mom's
                                            jewelry. He is also drunk with "fun" at his age. His parents go from place to place to
                                            find him, but they have no luck. One day, he gets to meet Huang, Weng Khim's friend, so
                                            he finally gets to see Weng Khim with a 10-year-old prostitute named Phanni, whom he is
                                            madly in love with. However, Suang U does not bring him home. Suang U seems to be more
                                            lenient towards Weng Khim this time, while Mui Eng cannot accept the fact that a
                                            prostitute might be her daughter-in-law. Suang U offers to take Phanni and his son in
                                            together and even gets his daughters to stay together in one room to make a great room
                                            for the lovebirds. He thinks of it as an investment to get his son back.</p>

                                    </div>
                                </div>
                            </div>

                            {/* Letter 81 - 96 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwentySix" aria-expanded="false" aria-controls="collapseTwentySix">
                                        <h5 className="fw-medium text-center">Letter #81 - #96</h5>
                                    </button>
                                </h2>
                                <div id="collapseTwentySix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">

                                        <p className="fs-5 pb-2">Phanni has difficulty fitting in with the family: the laundry, the wake-up,
                                            and the TV, and even Meng Chu creates a blackout to get her to sleep early. Eventually,
                                            she tries to fit in by doing her laundry and Weng Khim's, and Mui Eng starts to accept
                                            that this is her Karma. Kim is madly trying to return the dowry to Suang U. Phanni
                                            leaves the house with Mui Eng's jewelry, and Weng Khim still supports Phanni.</p>

                                        <p className="fs-5 pb-2">Meng Chu talks to her father about whether he will allow her to get paid for
                                            her job, and Suang U learns that Bak Li has a boyfriend named "Surasak". Meng Chu and
                                            Suang U continue to debate his perspective on the Thai people. Weng Khim is infected
                                            with an STD and has been taking some medicine. He finally bursts out his anger and talks
                                            about his difficulty fitting in the crowd while most Chinese boys are abusing their
                                            wealth (he never gets what he wants). </p>

                                        <p className="fs-5 pb-2">Bak Li is pregnant and needs to get married. After the suggestion from Ang
                                            Buai, and the insult from Chui Kim, Bak Li's father needs to pay for the wedding, while
                                            Surasak stingily pays for the food. He even asks his mom to move in, who is very stingy
                                            as well, and she does not even do laundry regularly. Mui Eng dies in an accident on
                                            their way to the beach because they hire their driver. Meng Chu suggests cremating her
                                            mom and spending the money for charity, although his friends frown upon it. </p>

                                        <p className="fs-5 pb-2">On the funeral day, one of Meng Chu's friends catches his eye. Suang U
                                            agrees to buy the white dress for Rose for her wedding, but she takes it too generously,
                                            which surprises him. Suang U tends to consult with Meng Chu a lot since she is the only
                                            one left in the house, and she even suggests he marry Ang Buai. Suang U tends to worry
                                            about children's love and respect for their parents, and people tend to frown upon the
                                            fact that Suang U has been writing to his mom for 20 years, but only Winyu understands.
                                        </p>

                                        <p className="fs-5 pb-2">Winyu is smarter than most men SU knows, and he gets to teach SU about
                                            racism. Meng Chu is marrying Winyu no matter what. She sees marriage as a test of her
                                            relationship, which pisses Suang UU off, and also the fact that he's Thai. His mom pays
                                            a visit (Thai and Chinese are cousins) and witnesses Bak Li's scene. Suang U plans to
                                            move out since the house reminds him too much of the old times, and now Meng Chu has a
                                            job that pays more than her husband. </p>

                                        <p className="fs-5 pb-2">Suang U learns about Meng Chu's wedding from Ang Buai, who also learns that
                                            Suang U will give out bank books to his children while Meng Chu's kept with Ang Buai.
                                            Suang U moves to Thonburi and learns more about Thai and how Chinese children marry
                                            Thais, and even his neighbor persuades him not to live alone. One day, Meng Chu visits
                                            him, and he learns that her husband helps her with housework, and he's shocked. </p>

                                        <p className="fs-5 pb-2">There is a fire in Thonburi, and everyone is shocked, which headlines
                                            (dramatically) the newspapers. People are helping and stealing, and Winyu and Ang Buai
                                            come to help Suang U. Now Weng Khim and Rose persuade him to come back to live with
                                            them. Rose has been very stingy with her employees, which irritates Suang U. She tends
                                            to spend her money lavishly on her husband and herself, so Suang U goes to visit Chui
                                            Kim and has some great talks about the drawbacks of a Thai marriage license (Chui Kim
                                            does not need to ask her husband to buy land). </p>

                                        <p className="fs-5 pb-2">Suang U lives in Chui Kim's house. Weng Khim becomes very ungrateful. He
                                            said this about Suang U behind his back. <b><u>Damn that fire in Thonburi ... I haven't
                                                had an
                                                night's peaceful sleep since. One lousy year of freedom, and bang! here he was,
                                                pushing
                                                up the thermostat in our refrigerator. I admit that you were right-but don't
                                                keep
                                                nagging me about it, all right?"</u></b></p>

                                        <p className="fs-5 pb-2">And the next morning, he said something nice to his father's face.
                                            <b><u>"Why do
                                                you have to leave us and live with Chui Kim, Papa? Everyone will talk . .. I
                                                mean, how
                                                does it look? All your old cronies will think well, you know living with a
                                                daughter and
                                                all ... " "Are you afraid of losing face, then?" I asked, fastening the lock on
                                                my
                                                trunk. "I'm worried about you, room, of course. But let's face it, Papa, you
                                                could go
                                                back to that place in Thonburi if you wanted to. You liked it over there, didn't
                                                you?
                                                Why do you have to look at me like that?"</u></b>
                                        </p>

                                        <p className="fs-5 pb-2">Suang U moves to live with Meng Chu and Bak Li visits. Winyu teaches Suang U
                                            again about Thai (farm). Suang U wants to rent a shop, and Khun Surasang helps. Suang U
                                            ended by renting a place to have a small business and stay with Meng Chu. At the end of
                                            the story, Suang U has learned so many things, including the fact that money is
                                            everything. He also regrets that he should have treated his son differently. He also
                                            agreed to get married to Ang Buai, so he asked Meng Chu to talk to Ang Buai about it.
                                        </p>

                                    </div>
                                </div>
                            </div>

                        </motion.div>

                        {/* Reference */}
                        <motion.div {...fadeUp}>
                            <h3 className="mt-4 fw-semibold">Reference</h3>
                            <p className="fs-5">Summarized by <i>Senior. Kimleang Yon.{' '}</i>
                                <a href="https://docs.google.com/document/d/1edjbMyXB5lvF00a5er4OWkKe9XQy5yTF/edit?usp=sharing&ouid=105068389646152264729&rtpof=true&sd=true" target="_blank" rel="noreferrer" className="text-decoration-none">
                                    Letters from Thailand_Summary.docx{' '}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                                        <path fillRule="evenodd"
                                            d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5">
                                        </path>
                                        <path fillRule="evenodd"
                                            d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z">
                                        </path>
                                    </svg>
                                </a>
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LettersFromThailandSummary;