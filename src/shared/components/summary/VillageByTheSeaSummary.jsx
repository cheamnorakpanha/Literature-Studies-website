import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import UseAnimations from '../../hooks/UseAnimations';

function VillageByTheSeaSummary() {
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
                            transition={{ duration: 0.4, ease: "easeInOut" }}>The Village by the Sea
                        </motion.h1>

                        <motion.h2
                            className="mb-4 fw-bold" {...slideLeft}
                            transition={{ duration: 0.6, ease: "easeInOut" }}>By Anita Desai
                        </motion.h2>

                        <motion.h3
                            className="mt-4 fw-semibold text-center" {...slideLeft}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                        >Summary
                        </motion.h3>

                        {/* paragraph 1 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>The novel's action takes place in a fishing village near the sea named Thul, located in a
                            rural area in India. The novel follows the life of a small family forced to live in poverty. The parents
                            are unable to take care of their four children—the mother is sick with an unknown illness and the father
                            is given to drink and dissolution—so the oldest two, Lila and Hari, assume the roles of adults in the
                            house. Lila takes care of her mother and takes care of the house while her brother works in the fields
                            to financially sustain his family.
                        </motion.p>

                        {/* paragraph 2 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>The family ended up in this situation after Lila, Hari, Kamal, and Belu's father were
                            tricked into believing that if he paid a large sum of money, someone would find him a job in Goa. The
                            man ran away with the money, and the father stopped working and started drinking excessively, which put
                            a strain on the family.
                        </motion.p>

                        {/* paragraph 3 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>Hari begins to think about better ways in which he could help his family and believes their
                            prospects might get better when he hears that a factory will be built in their village. All of Hari's
                            friends are excited, but Hari tries to have a more realistic view of whether he will find work in the
                            factory.</motion.p>

                        {/* paragraph 4 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>Their situation changes a bit when the de Silva family comes into the village. They are a
                            rich family who vacations at their seaside home several times a year, and they always employ the
                            children. Lila and Hari start helping them and become their servants. After finding out about their
                            situation, Mr. de Silva offers Hari a job in Bombay as a car washer. At first, Hari is suspicious of his
                            offer but then analyzes his situation and reaches the conclusion that Lila will never be able to find a
                            good husband without money and that it is now his responsibility to provide for his family.
                        </motion.p>

                        {/* paragraph 5 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>The factory man begins to cause a stir when he tells Hari and other villagers about the
                            major changes the fertilizer factory will bring: jobs for skilled people, land set aside for houses for
                            the thousands who will flood in, the removal of rice and other crops, etc. This causes consternation
                            among the villagers, and soon a protest begins to form. A group of men led by the charismatic Adarkar
                            decide to go to Bombay to speak with the government.
                        </motion.p>

                        {/* paragraph 6 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>Hari is roused by the words of Adarkar and decides to go to Bombay to stand up for his
                            people. He does not tell his sisters. When he arrives in Bombay, he is stunned by the city—its
                            buildings, its crowds, the smells and noises, the cars. He listens to Adarkar and other speakers, but
                            quickly realizes he has no role to play. All of a sudden, he is aware of his impetuosity for coming
                            here, and he feels very alone. He remembers Mr. de Silva's offer and manages to find the residence, but
                            the rude servant tells him that de Silvas is not in town. A kindly watchman tells him he will take him
                            to his friend Jagu.
                        </motion.p>

                        {/* paragraph 7 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>Jagu agrees to let Hari work in his restaurant, so Hari sends home a postcard letting his
                            sisters know where he is and that he is going to bring his earnings to them. Life is hard for Hari in
                            Bombay, but he works hard. While working for Jagu, Hari meets Mr. Panwallah, who takes Hari under his
                            wing and starts to teach him how to make watches and how to repair them.
                        </motion.p>

                        {/* paragraph 8 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>During the time Hari is in Bombay, Lila finds succor from the de Silva family. When they
                            come for their vacation, Lila works for them. She asks Mr. de Silva to take her mother to the hospital
                            when she hears he is driving that way, and he immediately agrees and says he will take care of
                            everything. When Lila's father hears of this, he yells at her in a drunken rage, but he goes to the
                            hospital and remains by his wife's side. He also gives up drinking and is much more subdued. Lila visits
                            every week, and her mother improves more and more. The de Silvas depart, but another guest stays in the
                            home—a venerable political leader studying birds that, coincidentally, Hari heard speak in Bombay. He is
                            quiet and kind and pays the girls well.
                        </motion.p>

                        {/* paragraph 9 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>Monsoon season is hard for both Hari in Bombay and the villagers by the sea. When Hari hears
                            on the radio that fishing boats out of Alibagh were lost in a storm, he decides he must return home. He
                            knows he belongs with his family by the sea. He decides to go to Diwali and continues to learn the
                            watchmaking trade from Mr. Panwallah in the interim.
                        </motion.p>

                        {/* paragraph 10 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>Hari returns and has an emotional reunion with his sisters. He is stunned to hear of his
                            mother's improvement and his father's sobriety. He tells Lila that he has decided to start a small
                            business raising animals while thinking that he will open his watch shop in the future; both business
                            options are good for when the factory crowds come. Hari visits his mother in the hospital and is
                            thrilled to see that the years of illness have passed. His father also seems pleased to see him in his
                            gruff way. Hari and his father can take Mother home for Diwali.
                        </motion.p>

                        {/* paragraph 11 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>The celebrations are delightful and heartwarming for the family. Hari slips away for a
                            moment during the preparations to see the man at the Mon Repos. He talks with him briefly about bird
                            watching and suddenly realizes that he is Sayyid Ali, the impassioned speaker from Bombay. Ali is like
                            Mr. Panwallah but expresses sadness about the changes coming to Alibagh. Hari tells him what he is
                            doing, and Ali perks up, admiring Hari's will to adapt.
                        </motion.p>

                        {/* paragraph 12 */}
                        <motion.p className="fs-5 pb-2" {...fadeUp}>The story ends with the family contentedly celebrating, grateful for the positive changes in
                            their lives.
                        </motion.p>

                        {/* Reference */}
                        <motion.div {...fadeUp}>
                            <h3 className="mt-4 fw-semibold">Reference</h3>
                            <p className="fs-5">GradeSaver. (2024, March 10). The Village by the Sea Summary. <i>GradeSaver.{' '}</i>
                                <a href="https://www.gradesaver.com/the-village-by-the-sea/study-guide/summary" target="_blank" rel="noreferrer"
                                    className="text-decoration-none">
                                    https://www.gradesaver.com/the-village-by-the-sea/study-guide/summary{' '}
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

export default VillageByTheSeaSummary;