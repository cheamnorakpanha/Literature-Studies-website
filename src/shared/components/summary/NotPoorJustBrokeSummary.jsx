import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import UseAnimations from '../../hooks/UseAnimations';

function NotPoorJustBrokeSummary() {
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
                            transition={{ duration: 0.4, ease: "easeInOut" }}>Not Poor, Just Broke
                        </motion.h1>

                        <motion.h2
                            className="mb-4 fw-bold" {...slideLeft}
                            transition={{ duration: 0.6, ease: "easeInOut" }}>By Dick Gregory
                        </motion.h2>

                        <motion.h3
                            className="mt-4 fw-semibold text-center" {...slideLeft}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                        >Summary
                        </motion.h3>

                        {/* paragraph 1 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>The author recounts their childhood experiences with Helene Tucker, a light-complexioned and
                            smart girl. He was in love with her and would often go to school to look at her. Despite the harsh
                            winter conditions, he would wash their clothes every night and buy ice from Mister Ben's grocery store
                            to make them dry. Helene was a symbol of everything he wanted. Richard would sometimes run out on the
                            street to meet Helene, shovel snow off her walk, and try to make friends with her family. He would also
                            drop money on her stoop late at night while shining shoes in taverns. Helene had a good-looking daddy
                            who was a paper hanger.
                        </motion.p>

                        {/* paragraph 2 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>Richard may have gotten over Helene by summertime, but something happened in that classroom
                            that made her face hang in front of them for the next twenty-two years. When he played the drums in high
                            school, it was for Helene, and when he broke track records in college, it was for Helene. It wasn't
                            until they were 29 years old, married, and making money that Richard finally got her out of their
                            system. Helene was sitting in the classroom when Richard learned to be ashamed of himself. On Thursday,
                            the teacher thought Richard was stupid, as they couldn't spell, read, or do arithmetic. They were never
                            interested in finding out about his struggles. He was so hungry because he hadn't had any breakfast., as
                            he only thought about noontime and how they could steal lunch from the cloakroom.
                        </motion.p>

                        {/* paragraph 3 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>Richard's experiences as a pregnant child include poverty, dirt, smells, colds, shoes, and
                            hunger. The teacher thought Richard was a troublemaker, but she couldn't see a black boy who made noises
                            to let others know he was there. On Thursday, the day before the Negro payday, the teacher asked each
                            student how much their father would give to the Community Chest. Richard decided to buy him a Daddy
                            immediately, using money from his pocket and Helene Tucker's pledge for her Daddy.
                        </motion.p>

                        {/* paragraph 4 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>The teacher called out names alphabetically, and Richard felt good about his Daddy. He had
                            almost three dollars in dimes and quarters in his pocket, waiting for the teacher to call his name.
                            However, the teacher closed her book after calling everyone else in the class. Richard raises his hand,
                            and the teacher tells him that Richard Gregory forgot him. She turns towards the blackboard, saying she
                            doesn't have time to play with him. Richard's father promised to give him fifteen dollars, but the
                            teacher looks mad and says they are collecting this money for him and his kind. If Richard's father can
                            give him fifteen dollars, he has no business being on relief.
                        </motion.p>

                        {/* paragraph 5 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>Helene Tucker is shocked and feels sorry for him. She reveals that the world knows he
                            doesn't have a father, and Richard is left feeling ashamed. He always thought the teacher liked him, as
                            he was chosen to wash the blackboard on Fridays after school. Richard walks out of school that day,
                            feeling ashamed. Everyone inside the classroom hears the teacher's words and feels sorry for him. He
                            feels ashamed for attending the Worthy Boys Annual Christmas Dinner, wearing the uniform provided by the
                            welfare department, and walking down the street in a warm mackinaw. His mother beats him and calls him a
                            little rat when she finds out he stuffed it in a garbage pail.
                        </motion.p>

                        {/* paragraph 6 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>Richard also feels shame for running to Mister Ben's for rotten peaches, asking Mrs. Simmoms
                            for sugar, and meeting the relief truck. He hates the truck and hides when it arrives. He sneaks through
                            alleys to avoid being seen by people going into White's Eat Shop. The whole world hears the teacher's
                            words, and Richard realizes that he doesn't have a father.
                        </motion.p>

                        {/* Reference */}
                        <motion.div {...fadeUp}>
                            <h3 className="mt-4 fw-semibold">Reference</h3>
                            <p className="fs-5">Not Poor, Just Broke by Richard Gregory. (n.d.). <i>OneDrive.{' '}</i>
                                <a href="https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fwww.wlwv.k12.or.us%2Fcms%2Flib8%2FOR01001812%2FCentricity%2FDomain%2F1354%2FNot%2520Poor%2520Just%2520Broke%2520Autobiography%2520excerpt.doc&wdOrigin=BROWSELINK" target="_blank" rel="noreferrer"
                                    className="text-decoration-none">
                                    Not Poor, Just Broke - By Richard Gregory{' '}
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

export default NotPoorJustBrokeSummary;