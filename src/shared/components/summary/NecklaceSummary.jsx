import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import UseAnimations from '../../hooks/UseAnimations';

function NecklaceSummary() {
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
                            transition={{ duration: 0.4, ease: "easeInOut" }}>The Necklace
                        </motion.h1>

                        <motion.h2
                            className="mb-4 fw-bold" {...slideLeft}
                            transition={{ duration: 0.6, ease: "easeInOut" }}>By Guy de Maupassant
                        </motion.h2>

                        <motion.h3
                            className="mt-4 fw-semibold text-center" {...slideLeft}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                        >Summary
                        </motion.h3>

                        {/* paragraph 1 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>Mathilde Loisel is “pretty and charming” but feels she has been born into a family of
                            unfavorable economic status. She was married off to a lowly clerk in the Ministry of Education, who
                            could afford to provide her with a modest, though not uncomfortable, lifestyle. Mathilde feels the
                            burden of her poverty intensely. She regrets her lot in life and spends endless hours imagining a more
                            extravagant existence. While her husband expresses his pleasure at the small, modest supper she has
                            prepared for him, she dreams of an elaborate feast served in fancy China and eaten in the company of
                            wealthy friends. She possesses no fancy jewels or clothing, yet these are the only things she lives for.
                            Without them, she feels she is not desirable. She has one wealthy friend, Madame Forestier, but refuses
                            to visit her because of the heartbreak it brings her.
                        </motion.p>

                        {/* paragraph 2 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>One night, her husband returns home proudly bearing an invitation to a formal party hosted
                            by the Ministry of Education. He hopes that Mathilde will be thrilled with the chance to attend an event
                            of this sort, but she is instantly angry and begins to cry. Through her tears, she tells him that she
                            has nothing to wear and he ought to give the invitation to one of his friends whose wife can afford
                            better clothing. Her husband is upset by her reaction and asks how much a suitable dress would cost. She
                            thinks about it carefully and tells him that 400 francs would be enough. Her husband quietly balks at
                            the sum but agrees that she may have the money.
                        </motion.p>

                        {/* paragraph 3 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>As the day of the party approaches, Mathilde starts to behave oddly. She confesses that the
                            reason for her behavior is her lack of jewels. Monsieur Loisel suggests that she wear flowers, but she
                            refuses. He implores her to visit Madame Forestier and borrow something from her. Madame Forestier
                            agrees to lend Mathilde her jewels, and Mathilde selects a diamond necklace. She is overcome with
                            gratitude at Madame Forestier's generosity.
                        </motion.p>

                        {/* paragraph 4 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>At the party, Mathilde is the most beautiful woman in attendance, and everyone notices her.
                            She is intoxicated by the attention and has an overwhelming sense of self-satisfaction. At 4 a.m., she
                            finally looks for Monsieur Loisel, who has been dozing for hours in a deserted room. He cloaks her bare
                            shoulders in a wrap and cautions her to wait inside, away from the cold night air, while he fetches a
                            cab. But she is ashamed of the shabbiness of her wrap and follows Monsieur Loisel outside. They walk for
                            a while before hailing a cab.
                        </motion.p>

                        {/* paragraph 5 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>When they finally return home, Mathilde is saddened that the night has ended. As she removes
                            her wrap, she discovers that her necklace is no longer around her neck. In a panic, Monsieur Loisel goes
                            outside and retraces their steps. Terrified, she sits and waits for him. He returns home much later, in
                            an even greater panic—he has not found the necklace. He instructs her to write to Madame Forestier and
                            say that she has broken the clasp of the necklace and is getting it mended.
                        </motion.p>

                        {/* paragraph 6 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>They continue to look for the necklace. After a week, Monsieur Loisel says they have to see
                            about replacing it. They visit many jewelers, searching for a similar necklace, and finally find one. It
                            costs 40,000 francs, although the jeweler says he will give it to them for 36,000. The Loisels spend a
                            week scraping up money from all kinds of sources, mortgaging the rest of their existence. After three
                            days, Monsieur Loisel purchases the necklace. When Mathilde returns the necklace, in its case, to Madame
                            Forestier, Madame Forestier is annoyed at how long it has taken to get it back but does not open the
                            case to inspect it. Mathilde is relieved.
                        </motion.p>

                        {/* paragraph 7 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>The Loisels began to live a life of crippling poverty. They dismiss their servant and move
                            into an even smaller apartment. Monsieur Loisel works three jobs, and Mathilde spends all her time doing
                            the heavy housework. This misery lasts ten years, but in the end, they have repaid their financial
                            debts. Mathilde's extraordinary beauty is now gone; she looks just like the other women in poor
                            households. They are both tired and irrevocably damaged from these years of hardship.
                        </motion.p>

                        {/* paragraph 8 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>One Sunday, while she is out for a walk, Mathilde spots Madame Forestier. Feeling emotional,
                            she approaches her and offers greetings. Madame Forestier does not recognize her, and when Mathilde
                            identifies herself, Madame Forestier cannot help but exclaim that she looks different. Mathilde says
                            that the change was on her account and explains to her the long saga of losing the necklace, replacing
                            it, and working for ten years to repay the debts. At the end of her story, Madame Forestier clasps her
                            hands and tells Mathilde that the original necklace was just costume jewelry and not worth anything.
                        </motion.p>

                        {/* Reference */}
                        <motion.div {...fadeUp}>
                            <h3 className="mt-4 fw-semibold">Reference</h3>
                            <p className="fs-5">The Necklace: Full plot summary | SparkNotes. (n.d.). <i>SparkNotes.{' '}</i>
                                <a href="https://www.sparknotes.com/short-stories/the-necklace/summary/" target="_blank" rel="noreferrer"
                                    className="text-decoration-none">
                                    https://www.sparknotes.com/short-stories/the-necklace/summary/{' '}
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

export default NecklaceSummary;