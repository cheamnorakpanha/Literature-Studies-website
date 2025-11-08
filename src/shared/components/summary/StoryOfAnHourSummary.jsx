import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import UseAnimations from '../../hooks/UseAnimations';

function StoryOfAnHourSummary() {
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
                            transition={{ duration: 0.4, ease: "easeInOut" }}>The Story of an Hour
                        </motion.h1>

                        <motion.h2
                            className="mb-4 fw-bold" {...slideLeft}
                            transition={{ duration: 0.6, ease: "easeInOut" }}>By Kate Chopin
                        </motion.h2>

                        <motion.h3
                            className="mt-4 fw-semibold text-center" {...slideLeft}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                        >Summary
                        </motion.h3>

                        {/* paragraph 1 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>Louise Mallard has heart trouble, so she must be informed carefully about her husband's
                            death. Her sister, Josephine, tells her the news. Louise's husband's friend, Richards, learned about a
                            railroad disaster when he was in the newspaper office and saw Louise's husband, Brently, on the list of
                            those killed. Louise begins sobbing when Josephine tells her of Brently's death and goes upstairs to be
                            alone in her room.
                        </motion.p>

                        {/* paragraph 2 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>Louise sits down and looks out an open window. She sees trees, smells approaching rain, and
                            hears a peddler yelling out what he's selling. She hears someone singing as well as the sounds of
                            sparrows, and there are fluffy white clouds in the sky. She is young, with lines around her eyes. Still
                            crying, she gazes into the distance. She feels apprehensive and tries to suppress the building emotions
                            within her, but she can't. She begins repeating the word free! to herself over and over again. Her heart
                            beats quickly, and she feels very warm.
                        </motion.p>

                        {/* paragraph 3 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>Louise knows she'll cry again when she sees Brently's corpse. His hands were tender, and he
                            always looked at her lovingly. But then she imagines the years ahead, which belong only to her now, and
                            spreads her arms out joyfully with anticipation. She will be free on her own, without anyone to oppress
                            her. She thinks that all women and men oppress one another, even if they do it out of kindness. Louise
                            knows that she often feels love for Brently, but she tells herself that none of that matters anymore.
                            She feels ecstatic with her newfound sense of independence.
                        </motion.p>

                        {/* paragraph 4 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>Josephine comes to her door, begging Louise to come out, warning her that she'll get sick if
                            she doesn't. Louise tells her to go away. She fantasizes about all the days and years ahead and hopes
                            that she lives a long life. Then she opens the door, and she and Josephine start walking down the
                            stairs, where Richards is waiting.
                        </motion.p>

                        {/* paragraph 5 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>The front door unexpectedly opens, and Brently comes in. He hadn't been in the train
                            accident or even aware that one had happened. Josephine screams, and Richards tries unsuccessfully to
                            block Louise from seeing him. Doctors arrive and pronounce that Louise died of a heart attack brought on
                            by happiness.
                        </motion.p>

                        {/* Reference */}
                        <motion.div {...fadeUp}>
                            <h3 className="mt-4 fw-semibold">Reference</h3>
                            <p className="fs-5">The Story of An Hour: Full plot summary | SparkNotes. (n.d.). <i>SparkNotes. {' '}</i>
                                <a href="https://www.sparknotes.com/short-stories/the-story-of-an-hour/summary/" target="_blank" rel="noreferrer"
                                    className="text-decoration-none">
                                    https://www.sparknotes.com/short-stories/the-story-of-an-hour/summary/{' '}
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

export default StoryOfAnHourSummary;