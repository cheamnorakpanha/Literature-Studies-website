import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import UseAnimations from '../../hooks/UseAnimations';

function DroversWifeSummary() {
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
                            transition={{ duration: 0.4, ease: "easeInOut" }}>
                            The Drover's Wife
                        </motion.h1>

                        <motion.h2 className="mb-4 fw-bold" {...slideLeft}
                            transition={{ duration: 0.6, ease: "easeInOut" }}>
                            By Henry Lawson
                        </motion.h2>

                        <motion.h3 className="mb-4 fw-semibold text-center" {...slideLeft}
                            transition={{ duration: 0.8, ease: "easeInOut" }}>
                            Summary
                        </motion.h3>

                        {/* Paragraph 1 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>The bush woman is alerted to the fact that a snake has just entered her small, ramshackle
                            house deep in the Australian outback by her eldest son, Tommy. Tommy goes after the snake with a stick,
                            and the family dog, Alligator, follows suit. Both are unable to catch the snake, however, which slips
                            under the floorboards of the house. Aware that a snake bite so far from help would be deadly, the bush
                            woman unsuccessfully attempts to lure the snake out. With the sun setting and a thunderstorm on the
                            horizon, she sets up a bed on the kitchen table for her children, where they will be out of the snake's
                            reach.
                        </motion.p>

                        {/* Paragraph 2 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>The bush woman once dreamt of a more comfortable life and enjoyed being pampered by her
                            husband, a drover. Ever since he lost everything in a drought, however, she has grown used to being
                            alone and working tirelessly to ensure her family's survival. Although she does not see her husband very
                            often, he treats her well. However, because he is gone for long periods, she is left to take care of the
                            family on her own and protect them from the various threats they face in the bush. She once nearly died
                            in childbirth and only survived with the help of a local Aboriginal couple. When one of her children
                            died, she rode nearly 20 miles with the child's body in search of help. She also once fought a bushfire
                            that nearly consumed the house, managing to put it out with the help of four bushmen who arrived at the
                            last minute.
                        </motion.p>

                        {/* Paragraph 3 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>She has not always won against the assaults of nature; she cried after a flood broke through
                            the dam her husband had built, and she lost two of her two best cows to illness. But she has
                            successfully fought off many wild animals and also held her own against men who have come to the door
                            while her husband is away. She has few pleasures in the outback, though she makes time to read the Young
                            Ladies' Journal and is sure to dress herself and her children up every Sunday and go for long walks
                            through the bush with her baby carriage.
                        </motion.p>

                        {/* Paragraph 4 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>The bush woman realizes that her candle is about to go out, so she goes to get some wood
                            from the woodpile. When she does so, the woodpile collapses, causing her to realize that the Aboriginal
                            man who constructed it must have deceived her by building it hollow. She begins to cry, but soon calms
                            down. Alligator suddenly approaches the partition between the kitchen and the rest of the house, and the
                            bush woman realizes that the snake must be emerging. She grabs her stick, but Alligator gets there
                            first. The dog grabs the snake with his mouth and shakes it until it dies. The woman then throws the
                            snake's remains into the fire. Tommy embraces his mother and promises that he will never be a drover
                            like his father.
                        </motion.p>

                        {/* Reference */}
                        <motion.div {...fadeUp}>
                            <h3 className="mt-4 fw-semibold">Reference</h3>
                            <p className="fs-5">The Drover's Wife by Henry Lawson plot summary | LitCharts. (n.d.). <i>Interesting Literature.{' '}</i>
                                <a href="https://www.litcharts.com/lit/the-drover-s-wife/summary" target="_blank" rel="noreferrer"
                                    className="text-decoration-none">
                                    https://www.litcharts.com/lit/the-drover-s-wife/summary{' '}
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

export default DroversWifeSummary;