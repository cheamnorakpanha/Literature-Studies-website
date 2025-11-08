import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import UseAnimations from '../../hooks/UseAnimations';

function HitchHikerSummary() {
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
                            transition={{ duration: 0.4, ease: "easeInOut" }}>The Hitch-Hiker
                        </motion.h1>

                        <motion.h2
                            className="mb-4 fw-bold" {...slideLeft}
                            transition={{ duration: 0.6, ease: "easeInOut" }}>By Roald Dahl
                        </motion.h2>

                        <motion.h3
                            className="mt-4 fw-semibold text-center" {...slideLeft}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                        >Summary
                        </motion.h3>

                        {/* Paragraph 1 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>The narrator is driving to London in his new BMW 1975 car when he picks up a hitchhiker. The
                            narrator always picks up hitchhikers since, in early times, he also used to hitchhike and he knew how
                            difficult it can be. The author describes the hitchhiker as a small, ratty-faced man with gray teeth.
                            The man mentions he's going to the horse races, but not to bet or work the ticket machines. The narrator
                            is intrigued and says he's a writer, while the hitchhiker claims to be in a highly skilled trade.
                        </motion.p>

                        {/* Paragraph 2 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>They get to talking about the car, and the narrator proudly states it can hit 129 miles per
                            hour. The hitchhiker doubts that, so once they hit a straight patch of road, the narrator accelerates.
                            They are stopped by a policeman on a motorcycle, who is a bit of a bully and threatens to have the
                            narrator thrown in prison. He takes down his address and also that of the hitchhiker, who claims to be a
                            hod-carrier. Then he gives them a ticket and leaves, and they continue on their way.
                        </motion.p>

                        {/* Paragraph 3 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>The narrator is worried about the ticket, but the hitchhiker says it will be fine. The
                            narrator then asks why the hitchhiker lied to the policeman about his job and wonders if he is ashamed
                            of it. The hitchhiker takes offense at the implication that he would be ashamed of his work, and the
                            narrator tries to guess what his true occupation is. After several failed guesses, the hitchhiker
                            reveals that he has taken several of the narrator's belongings without the narrator noticing, then
                            explains that he is an extremely skilled pickpocket, although he refers to himself as a "finger smith."
                            He makes a living by attending races and stealing money from the winners and the rich, and he proudly
                            announces that he has never been caught.
                        </motion.p>

                        {/* Paragraph 4 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>The narrator is concerned that the policeman will be checking up on the hitchhiker, but the
                            hitchhiker is confident that no one will be checking up on him, as policemen have notoriously bad
                            memories. The narrator points out that the policeman has the details written down in his book, only for
                            the hitchhiker to reveal that he's stolen both books from the policeman. They pull off the road to burn
                            the books, and the narrator admires the hitchhiker's skills.
                        </motion.p>

                        {/* Reference */}
                        <motion.div {...fadeUp}>
                            <h3 className="mt-4 fw-semibold">Reference</h3>
                            <p className="fs-5">Wikipedia contributors. (2024, February 20). The Hitch-Hiker (short story).{' '}
                                <i>Wikipedia.{' '}</i>
                                <a href="https://en.wikipedia.org/wiki/The_Hitch-Hiker_(short_story)"
                                    target="_blank" rel="noreferrer" className="text-decoration-none">
                                    https://en.wikipedia.org/wiki/The_Hitch-Hiker_(short_story){' '}
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

export default HitchHikerSummary;