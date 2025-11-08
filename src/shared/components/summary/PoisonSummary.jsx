import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import UseAnimations from '../../hooks/UseAnimations';

function PoisonSummary() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { slideLeft, fadeUp } = UseAnimations();

    return (
        <div className='m-3'>
            <div class="container bg-white p-4 border" style={{ textAlign: 'justify', marginTop: '5rem' }}>
                <div className='row'>
                    <div className='col'>
                        <motion.h1
                            className="mb-4 fw-bolder" {...slideLeft}
                            transition={{ duration: 0.4, ease: "easeInOut" }}>Poison
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

                        {/* paragraph 1 */}
                        <motion.p class="fs-5 pb-2" {...fadeUp}>Timber Woods, the narrator, arrives home at his bungalow to discover his partner, Harry
                            Pope, lying in bed and acting strangely. Harry is whispering and sweating all over. He tells Timber that
                            a krait—an extremely poisonous little snake—crawled onto the bed and is now sleeping under the sheet on
                            Harry's stomach.
                        </motion.p>

                        {/* paragraph 2 */}
                        <motion.p class="fs-5 pb-2" {...fadeUp}>Timber gets a knife from the kitchen in case Harry gets bitten, which he'll use to cut the
                            skin and suck out the poison. Harry tells him to call the doctor. Doctor Ganderbai agrees to come at
                            once. Once he arrives, he quickly decides that the first thing to do is inject Harry with some snakebite
                            serum. Carefully, Ganderbai rolls up Harry's pajama sleeve and ties on a rubber tourniquet. Harry is
                            struggling not to move or cough. Ganderbai smoothly inserts the needles and administers the serum.
                        </motion.p>

                        {/* paragraph 3 */}
                        <motion.p class="fs-5 pb-2" {...fadeUp}>Outside, the doctor tells Timber that the serum is by no means a guarantee of safety. They
                            decide to try to anesthetize the snake. They use chloroform to soak the mattress beneath Harry. The
                            process is agonizing and takes a long time. Eventually, they begin to slowly lift the sheet off Harry.
                            They see no sign of the snake.
                        </motion.p>

                        {/* paragraph 4 */}
                        <motion.p class="fs-5 pb-2" {...fadeUp}>“It could be up the leg of his pajamas,” says Ganderbai. At that, Harry goes berserk and
                            leaps to his feet, shaking his legs violently. When he stops, they realize that he hasn't been bitten
                            and that the snake is nowhere to be seen.
                        </motion.p>

                        paragraph 5
                        <motion.p class="fs-5 pb-2" {...fadeUp}>“Mr. Pope, you are of course quite sure you saw it in the first place?” asks Ganderbai.
                            Harry turns red and asks if Ganderbai is accusing him of being a liar. When the doctor doesn't reply,
                            Harry begins screaming horrible racist insults at him. The doctor quickly leaves.
                        </motion.p>

                        {/* paragraph 6 */}
                        <motion.p class="fs-5 pb-2" {...fadeUp}>Timber stops the doctor outside and apologizes to Harry. He thanks the doctor for his help.
                            “All he needs is a good holiday,” Ganderbai says quietly before driving off.
                        </motion.p>

                        {/* Reference */}
                        <motion.div {...fadeUp}>
                            <h3 class="mt-4 fw-semibold">Reference</h3>
                            <p class="fs-5">“Poison.” (n.d.). <i>Roald Dahl Fans.</i>
                                <a href="https://www.roalddahlfans.com/dahls-work/short-stories/poison/" target="_blank" rel="noreferrer"
                                    class="text-decoration-none">
                                    https://www.roalddahlfans.com/dahls-work/short-stories/poison/
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
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

export default PoisonSummary;