import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import UseAnimations from '../../hooks/UseAnimations';

function OliverTwistSummary() {
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
                            transition={{ duration: 0.4, ease: "easeInOut" }}>Oliver Twist
                        </motion.h1>

                        <motion.h2
                            className="mb-4 fw-bold" {...slideLeft}
                            transition={{ duration: 0.6, ease: "easeInOut" }}>By Charles Dickens
                        </motion.h2>

                        <motion.h3
                            className="mt-4 fw-semibold text-center" {...slideLeft}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                        >Summary
                        </motion.h3>

                        {/* paragraph 1 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>Oliver Twist begins in a workhouse in 1830s England, in an unnamed village, where a young
                            woman, revealed to be Oliver's mother, gives birth to her son and promptly dies. The boy, lucky to
                            survive, is raised until the age of nine on a "farm" for young orphaned children and then is sent to the
                            local workhouse again, where he labors for a time until his innocent request for more food so angers the
                            house's board and beadle, Mr. Bumble, that the workhouse attempts to foist Oliver off as an apprentice
                            to some worker in the villager. Oliver is eventually given over to a coffin maker named Sowerberry.
                            Oliver works as a "mute" mourner for Sowerberry and must sleep at night among the coffins. After a fight
                            with Noah, another of Sowerberry's apprentices, over Oliver's unwed mother (whom Noah insults), Oliver
                            runs away to London to make his fortune.
                        </motion.p>

                        {/* paragraph 2 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>Near London, Oliver meets a well-dressed young boy who introduces himself as the Artful
                            Dodger, a thief under the employ of a local crime boss named Fagin. The Dodger takes Oliver to Fagin,
                            who promises to help Oliver but holds him hostage and forces him to go on a thieving mission with the
                            Dodger and Bates, another young criminal. Bates and Dodger try to steal the handkerchief of an old man,
                            who notices Oliver (an innocent onlooker) and believes him to be the thief. Oliver is caught and hauled
                            to jail, only to be released into the old man Brownlow's company after Brownlow sees that Oliver had
                            nothing to do with the crime. Brownlow nurses Oliver for a time and vows to educate him properly. But
                            after sending Oliver out to return some books and money to a bookseller, Brownlow is shocked to find
                            that Oliver does not return—Oliver has been picked up by Nancy, an associate of Fagin's, and taken back
                            to the criminal gang.
                        </motion.p>

                        {/* paragraph 3 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>The remainder of the novel comprises Brownlow's attempts to find Oliver and Oliver's
                            attempts to escape Fagin, his criminal associate Sikes, and the other boys. Fagin orders Oliver to
                            accompany Sikes and another thief named Toby Crackit on a house-breaking in a country village that goes
                            awry; Oliver is shot in the arm in the attempt by a servant named Giles of the Maylie house (the house
                            being broken into); Oliver nearly dies, but walks back to the house the next morning and is nursed back
                            to health by Rose, Mrs. Maylie, and a local doctor named Lorsborne. Lorsborne later takes Oliver into
                            London to find Brownlow, but they discover Brownlow has gone to visit the West Indies. Oliver is
                            crestfallen but is happy nonetheless with the Maylies, and he is educated by an old man in the Maylies'
                            village. Later, on a trip to London, Rose is visited by Nancy, who wishes to come clean about her
                            involvement in Oliver's oppression, and Oliver finds that Brownlow is back in the city, having returned
                            from the West Indies.
                        </motion.p>

                        {/* paragraph 4 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>Meanwhile, Mrs. Corney, mistress of the workhouse, receives a package from a dying woman
                            named Old Sally, which Sally in turn receives from Oliver's mother upon her death. The package contains
                            material indicating Oliver's family history, which is of interest to a friend and shadowy associate of
                            Fagin's named Monks. Nancy meets with Rose and Brownlow in secret in London to discuss what she has
                            overheard from Fagin and Monks regarding Oliver's parentage. Noah, sent to spy on Nancy, overhears this
                            conversation and reports it to Fagin. Fagin tells Sikes, misleadingly, that Nancy has "peached" on the
                            whole gang (even though Nancy refused to incriminate Fagin or Sikes to Brownlow), and Sikes, in a fit of
                            rage, kills Nancy, then goes on the lam with his dog.
                        </motion.p>

                        {/* paragraph 5 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>Brownlow realizes that he recognized Oliver as resembling the picture of a woman in his
                            parlor and also recognized a man he came to realize was Monks. Brownlow pieces together the mystery of
                            Oliver's parentage: Oliver's father is also Monk's father, and Monk's mother defrauded Oliver's mother,
                            an unwed woman named Agnes, of the inheritance Oliver's father, Edwin, intended to leave to Oliver and
                            Agnes. Monks wish to destroy these facts about Oliver's parentage to keep all the inheritance for
                            himself. But Brownlow confronts Monks with these facts, and Monks agrees, finally, to sign an affidavit
                            admitting his part in the conspiracy to defraud Oliver.
                        </motion.p>

                        {/* paragraph 6 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>Meanwhile, the members of Fagin's gang are all caught: Noah; Charlotte, his partner; the
                            Dodger; and Fagin himself. Sikes dies by accident, attempting to escape a mob that has come to kill him
                            following Nancy's death. Brownlow manages to secure half of Oliver's inheritance for Oliver and gives
                            the other half to Monks, who spend it in the New World on criminal activity. Rose Maylie, long in love
                            with her cousin Harry, eventually marries him after Harry purposefully lowers his social station to
                            correspond with Rose's. Rose was said to be of a blighted family, and in the novel's final surprise,
                            this "blight" is revealed: Rose's sister was Agnes, meaning that Rose is Oliver's aunt.
                        </motion.p>

                        {/* paragraph 7 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>At the novel's end, Oliver is restored to his rightful lineage and is adopted by Brownlow.
                            The pair live in the country with Harry, who has become a parson, and Rose, along with Losborne and Mrs.
                            Maylie. Oliver can, at last, be educated in the tranquility and manner he deserves as the son of a
                            gentleman.
                        </motion.p>

                        {/* Reference */}
                        <motion.div {...fadeUp}>
                            <h3 className="mt-4 fw-semibold">Reference</h3>
                            <p className="fs-5">Oliver Twist by Charles Dickens Plot summary | LitCharts. (n.d.). <i>LitCharts.{' '}</i>
                                <a href="https://www.litcharts.com/lit/oliver-twist/summary" target="_blank" rel="noreferrer"
                                    className="text-decoration-none">
                                    https://www.litcharts.com/lit/oliver-twist/summary{' '}
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

export default OliverTwistSummary;