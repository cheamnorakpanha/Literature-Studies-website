import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import UseAnimations from '../../hooks/UseAnimations';

function HappyPrinceSummary() {
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
                            transition={{ duration: 0.4, ease: "easeInOut" }}>The Happy Prince
                        </motion.h1>

                        <motion.h2
                            className="mb-4 fw-bold" {...slideLeft}
                            transition={{ duration: 0.6, ease: "easeInOut" }}>By Oscar Wilde
                        </motion.h2>

                        <motion.h3
                            className="mt-4 fw-semibold text-center" {...slideLeft}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                        >Summary
                        </motion.h3>

                        {/* Paragraph 1 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>The Happy Prince of the story's title refers to a statue made of lead but painted all over
                            with gold. The statue's eyes are sapphires, and in the hilt of the sword he holds is a bright red ruby.
                            The statue stands high above a city and is admired by those who live there because he looks happy and
                            'like an angel'.
                        </motion.p>

                        {/* Paragraph 2 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>One night, a swallow flies over the city, having stayed behind in northern Europe when his
                            friends flew south to Egypt for the winter. The Swallow had stayed behind for love; he is in love with a
                            Reed he met in the spring. However, he begins to tire of Reed because she flirts with the wind every
                            time it blows, and when he asks her if she will come away with him, she appears to shake her head.
                        </motion.p>

                        {/* Paragraph 3 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>The swallow flies south, stopping the following night to rest. It just so happens that he
                            arrives in the city where the statue of the Happy Prince is located. He decides to sleep underneath the
                            statue of the Happy Prince that night, but when the statue starts to cry on him, he strikes up a
                            conversation with it. It turns out the Happy Prince isn't so happy. In life, he had been a wealthy and
                            privileged man who had been sheltered from the misery and hardship of ordinary people in the city. Only
                            in death, when he became this statue looking down on the city and its inhabitants, has he come to
                            realize how many people suffer and struggle.
                        </motion.p>

                        {/* Paragraph 4 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>He tells the Swallow to take the ruby from his sword hilt and deliver it to a poor
                            seamstress whose son is ill. The swallow reluctantly agrees. When he returns, he tells the Happy Prince
                            what he has done and that he feels warm, even though the air is cold. The Happy Prince tells him that he
                            has been warmed inside because he has done a good deed.
                        </motion.p>

                        {/* Paragraph 5 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>The next day, the Swallow prepares to bid the Happy Prince farewell as he must fly to Egypt
                            to join his friends. But the Happy Prince persuades him to take the sapphire out of one of his eye
                            sockets and take it to the poor young man, who is so poor he is freezing in his garret and cannot finish
                            the play he is writing. Once again, the Swallow does as the statue requests—though again, he does so
                            reluctantly, this time because he doesn't want to rob the Happy Prince of one of his eyes.
                        </motion.p>

                        {/* Paragraph 6 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>The next day, the Swallow once again says he must leave the Happy Prince and fly to Egypt,
                            but the Happy Prince persuades the Swallow to remove the other sapphire from his eye socket and take it
                            to the little match girl, who has dropped her matches in the gutter and will be beaten if she returns
                            home empty-handed. The Swallow doesn't want to remove the statue's second sapphire because it will leave
                            the Happy Prince blind, but the Prince insists.
                        </motion.p>

                        {/* Paragraph 7 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>Finally, the Happy Prince, having heard from the Swallow that children are starving in the
                            city streets, insists that the Swallow remove the gold leaf that covers him and take it to the children
                            so they can buy food with it. When the Swallow returns, having done this deed, he grows colder and
                            colder, and, after kissing the Happy Prince on the lips, he drops down dead at his feet. The prince dies
                            from a broken heart. The next day, the mayor and his town councilors notice the lead statue without its
                            gold coating and its jewels and remark how ugly it looks. They also notice the dead swallow at the foot
                            of the statue but express nothing but contempt for the dead bird. They have the statue of the Happy
                            Prince torn down and decide that the lead will be melted down to make a new statue (of one of the
                            Councilors, naturally).
                        </motion.p>

                        {/* Paragraph 8 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>But God, watching from heaven, tells one of his angels to bring him the two most precious
                            things in the city. The Angel brings him the lead heart from the Happy Prince (which wouldn't melt when
                            the rest of the statue was melted down) and the body of the dead Swallow who loved the Happy Prince. God
                            announces that the bird will sing in heaven forevermore, and the Happy Prince will praise God in his
                            'city of gold'.
                        </motion.p>

                        {/* Reference */}
                        <motion.div {...fadeUp}>
                            <h3 className="mt-4 fw-semibold">Reference</h3>
                            <p className="fs-5">A summary and analysis of Oscar Wilde's 'The Happy Prince.' (2023, April 18).
                                <i> Interesting Literature.{' '}</i>
                                <a href="https://interestingliterature.com/2021/03/oscar-wilde-the-happy-prince-summary-analysis/"
                                    target="_blank" rel="noreferrer" className="text-decoration-none">
                                    https://interestingliterature.com/2021/03/oscar-wilde-the-happy-prince-summary-analysis/{' '}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
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

export default HappyPrinceSummary;