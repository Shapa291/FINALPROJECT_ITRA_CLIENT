import React, { useState, useContext } from 'react'
import { FaStar } from "react-icons/fa"
import { colors, styles } from './RateStyles'
import { OneProblemContext } from '../../../helpers/OneProblemContext'
import { ProblemsContext } from '../../../helpers/ProblemsContext'
import { GetAllProblems, GetOneProblem, PostProblemRate, PutProblemRate } from '../../../API/API'
import { AuthContext } from '../../../helpers/AuthContext'
import { useTranslation } from 'react-i18next'

const RateProblem = () => {

    const { t } = useTranslation()

    const { oneProblemState, setOneProblemState } = useContext(OneProblemContext)
    const { setProblemState } = useContext(ProblemsContext)
    const { authState } = useContext(AuthContext)

    const stars = Array(5).fill(0)

    const [currentValue, setCurrentValue] = useState(0)
    const [hoverValue, setHoverValue] = useState(undefined)

    const handleClick = (value) => {
        setCurrentValue(value)
    }

    const handleMouseOver = (value) => {
        setHoverValue(value)
    }

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }
    const rateProblem = (id, value) => {
        PostProblemRate(id, value)
            .then(() => GetOneProblem(id))
            .then(resp => {
                setOneProblemState(resp);
                let rateData = []
                resp.Rates.reduce((acc, { rate }) => {
                    rateData.push(rate);

                    return acc;
                }, []);
                const averageRate = (rateData.reduce((a, b) => a + b) / rateData.length).toFixed(1);
                return PutProblemRate(id, averageRate);
            })
            .then(() => GetAllProblems())
            .then(response => {
                setProblemState(response);
            });
    }

    return (
        <div style={styles.container}>
            <h2>{t("problem.rateproblem")}</h2>
            {authState.status ?
                (
                    <div>
                        {stars.map((_, index) => {
                            return (
                                <FaStar
                                    key={index}
                                    size={24}
                                    style={{
                                        marginRight: 10,
                                        cursor: "pointer"
                                    }}
                                    color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                                    onMouseOver={() => handleMouseOver(index + 1)}
                                    onMouseLeave={handleMouseLeave}
                                    onClick={() => {
                                        handleClick(index + 1)
                                        rateProblem(oneProblemState.id, index + 1)
                                    }}
                                />
                            )
                        })}
                    </div>
                )
                :
                (
                    <h4>{t("problem.rateauth")}</h4>
                )}
        </div>
    )
}

export default RateProblem
