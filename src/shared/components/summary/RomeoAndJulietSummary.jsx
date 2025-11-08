import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const slideLeft = {
    initial: { opacity: 0, x: 200 },
    animate: { opacity: 1, x: 0 }
};

const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1 },
    viewport: { once: true }
};

function RomeoAndJulietSummary() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='m-3'>
            <div className="container bg-white p-4 border" style={{ textAlign: 'justify', marginTop: '5rem' }}>
                <div className='row'>
                    <div className='col'>
                        <motion.h1
                            className="mb-4 fw-bolder" {...slideLeft}
                            transition={{ duration: 0.4, ease: "easeInOut" }}>Romeo and Juliet
                        </motion.h1>

                        <motion.h2
                            className="mb-4 fw-bold" {...slideLeft}
                            transition={{ duration: 0.6, ease: "easeInOut" }}>By William Shakespeare
                        </motion.h2>

                        <motion.h3 className="mb-4 fw-semibold text-center" {...slideLeft}
                            transition={{ duration: 0.8, ease: "easeInOut" }}>Summary
                        </motion.h3>

                        {/* paragraph 1 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>In the streets of Verona, another brawl breaks out between the servants of the feuding noble
                            families of Capulet and Montague. Benvolio, a Montague, tries to stop the fighting, but he is himself
                            embroiled when Tybalt, a rash Capulet, arrives on the scene. After citizens outraged by the constant
                            violence beat back the warring factions, Prince Escalus, the ruler of Verona, attempts to prevent any
                            further conflicts between the families by decreeing death for any individual who disturbs the peace in
                            the future.
                        </motion.p>

                        {/* paragraph 2 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>Romeo, the son of Montague, runs into his cousin Benvolio, who had earlier seen Romeo moping
                            in a grove of sycamores. After some prodding by Benvolio, Romeo confides that he is in love with
                            Rosaline, a woman who does not return his affections. Benvolio counsels him to forget this woman and
                            find another, more beautiful one, but Romeo remains despondent. Meanwhile, Paris, a kinsman of the
                            Prince, seeks Juliet's hand in marriage. Her father, Capulet, though happy at the match, asks Paris to
                            wait two years since Juliet is not yet even fourteen. Capulet dispatches a servant with a list of people
                            to invite to a masquerade and feast he traditionally holds. He invites Paris to the feast, hoping that
                            Paris will begin to win Juliet's heart.
                        </motion.p>

                        {/* paragraph 3 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>Romeo and Benvolio, still discussing Rosaline, encounter the Capulet servant bearing the
                            list of invitations. Benvolio suggests that they attend since that will allow Romeo to compare his
                            beloved to other beautiful women in Verona. Romeo agrees to go with Benvolio to the feast, but only
                            because Rosaline, whose name he reads on the list, will be there. In Capulet's household, young Juliet
                            talks with her mother, Lady Capulet, and her nurse about the possibility of marrying Paris. Juliet has
                            not yet considered marriage but agrees to look at Paris during the feast to see if she thinks she could
                            fall in love with him.
                        </motion.p>

                        {/* paragraph 4 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>The feast begins. A melancholy Romeo follows Benvolio and their witty friend Mercutio to
                            Capulet's house. Once inside, Romeo sees Juliet from a distance and instantly falls in love with her; he
                            forgets about Rosaline completely. As Romeo watches Juliet, entranced, a young Capulet, Tybalt,
                            recognizes him and is enraged that a Montague would sneak into a Capulet feast. He prepares to attack,
                            but Capulet holds him back. Soon, Romeo speaks to Juliet, and the two experience a profound attraction.
                            They kiss, not even knowing each other's names. When he finds out from Juliet's nurse that she is the
                            daughter of Capulet—his family's enemy—he becomes distraught. When Juliet learns that the young man she
                            just kissed is the son of Montague, she grows equally upset. As Mercutio and Benvolio leave the Capulet
                            estate, Romeo leaps over the orchard wall into the garden, unable to leave Juliet behind. From his
                            hiding place, he sees Juliet in a window above the orchard and hears her speak his name. He calls out to
                            her, and they exchange vows of love.
                        </motion.p>

                        {/* paragraph 5 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>Romeo hurries to see his friend and confessor, Friar Lawrence, who, though shocked at the
                            sudden turn of Romeo's heart, agrees to marry the young lovers in secret since he sees in their love the
                            possibility of ending the age-old feud between Capulet and Montague. The following day, Romeo and Juliet
                            meet at Friar Lawrence's cell and are married. The Nurse, who is privy to the secret, procures a ladder,
                            which Romeo will use to climb into Juliet's window for their wedding night.
                        </motion.p>

                        {/* paragraph 6 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>The next day, Benvolio and Mercutio encounter Tybalt—Juliet's cousin—who, still enraged that
                            Romeo attended Capulet's feast, has challenged Romeo to a duel. Romeo appears. Now Tybalt's kinsman by
                            marriage, Romeo begs the Capulet to hold off the duel until he understands why Romeo does not want to
                            fight. Disgusted with this plea for peace, Mercutio says that he will fight Tybalt himself. The two
                            begin to duel. Romeo tries to stop them by leaping between the combatants. Tybalt stabs Mercutio under
                            Romeo's arm, and Mercutio dies. Romeo, in a rage, kills Tybalt. Romeo flees from the scene. Soon after,
                            the Prince declares him forever banished from Verona for his crime. Friar Lawrence arranges for Romeo to
                            spend his wedding night with Juliet before he has to leave for Mantua the following morning.
                        </motion.p>

                        {/* paragraph 7 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>In her room, Juliet awaits the arrival of her new husband. The Nurse enters and, after some
                            confusion, tells Juliet that Romeo has killed Tybalt. Distraught, Juliet suddenly finds herself married
                            to a man who has killed her kinsman. But she resettles herself and realizes that her duty belongs to her
                            love, Romeo. Romeo sneaks into Juliet's room that night, and at last, they consummate their marriage and
                            their love. The morning comes, and the lovers bid farewell, unsure when they will see each other again.
                            Juliet learns that her father, affected by the recent events, now intends for her to marry Paris in just
                            three days. Unsure of how to proceed—unable to reveal to her parents that she is married to Romeo, but
                            unwilling to marry Paris now that she is Romeo's wife—Juliet asks her nurse for advice. She counsels
                            Juliet to proceed as if Romeo were dead and to marry Paris, who is a better match anyway. Disgusted with
                            the Nurse's disloyalty, Juliet disregards her advice and hurries to Friar Lawrence. He concocts a plan
                            to reunite Juliet with Romeo in Mantua. The night before her wedding to Paris, Juliet must drink a
                            potion that will make her appear to be dead. After she is laid to rest in the family's crypt, the Friar
                            and Romeo will secretly retrieve her, and she will be free to live with Romeo away from their parents'
                            feuding.
                        </motion.p>

                        {/* paragraph 8 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>Juliet returns home to discover the wedding has been moved ahead one day, and she is to be
                            married tomorrow. That night, Juliet drinks the potion, and the Nurse discovers her, apparently dead,
                            the next morning. The Capulets grieve, and Juliet is entombed according to plan. But Friar Lawrence's
                            message explaining the plan to Romeo never reaches Mantua. Its bearer, Friar John, gets confined to a
                            quarantined house. Romeo hears only that Juliet is dead.
                        </motion.p>

                        {/* paragraph 9 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>Romeo learns only of Juliet's death and decides to kill himself rather than live without
                            her. He buys a vial of poison from a reluctant apothecary, then speeds back to Verona to take his own
                            life at Juliet's tomb. Outside the Capulet crypt, Romeo comes upon Paris, who is scattering flowers on
                            Juliet's grave. They fight, and Romeo kills Paris. He enters the tomb, sees Juliet's inanimate body,
                            drinks the poison, and dies by her side. Just then, Friar Lawrence enters and realizes that Romeo has
                            killed Paris and himself. At the same time, Juliet awakes. Friar Lawrence hears the coming of the watch.
                            When Juliet refuses to leave with him, he flees alone. Juliet sees her beloved Romeo and realizes he has
                            killed himself with poison. She kisses his poisoned lips, and when that does not kill her, she buries
                            his dagger in her chest, falling dead upon his body.
                        </motion.p>

                        {/* paragraph 10 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>The watch arrives, followed closely by the Prince, the Capulets, and Montague. Montague
                            declares that Lady Montague has died of grief over Romeo's exile. Seeing their children's bodies,
                            Capulet and Montague agree to end their long-standing feud and raise gold statues of their children
                            side-by-side in a newly peaceful Verona.
                        </motion.p>

                        {/* Reference */}
                        <motion.div {...fadeUp}>
                            <h3 className="mt-4 fw-semibold">Reference</h3>
                            <p className="fs-5">Romeo and Juliet: Full Play Summary | SparkNotes. (n.d.). <i>SparkNotes.{' '}</i>
                                <a href="https://www.sparknotes.com/shakespeare/romeojuliet/summary/" target="_blank" rel="noreferrer"
                                    className="text-decoration-none">
                                    https://www.sparknotes.com/shakespeare/romeojuliet/summary/{' '}
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

export default RomeoAndJulietSummary;