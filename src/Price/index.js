import React from 'react'
import { useTranslation } from "react-i18next";

function Price() {
  const { t } = useTranslation();
  return (
    <div className='container price'>
        <header><h3>{t("pricelist")}</h3></header>
        <table className='price-table'>
            <thead>
                <tr>
                    <th>{t("description")}</th>
                    <th>{t("amount")}</th>
                    <th>{t("paid-by-principal")}</th>
                    <th>{t("payment-deadline")}</th>
                    <th>{t("remark")}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>{t("sales-commision")}</th>
                    <th>{t("of-the-agreed-purchase-price")}</th>
                    <th>{t("seller")}</th>
                    <th>{t("precontract-contract")}</th>
                    <th>{t("for-rel-esate-whose-value")}</th>
                </tr>
                <tr>
                    <th>{t("purchase-commision")}</th>
                    <th>{t("of-the-agreed-purchase-price")}</th>
                    <th>{t("customer")}</th>
                    <th>{t("precontract-contract")}</th>
                    <th>{t("for-rel-esate-whose-value")}</th>
                </tr>
                <tr>
                    <th>{t("issue-commission")}</th>
                    <th>{t("50-of-the-amount")}</th>
                    <th>{t("lessor")}</th>
                    <th>{t("lease-agreement")}</th>
                    <th></th>
                </tr>
                <tr>
                    <th>{t("lease-commission")}</th>
                    <th>{t("50-of-the-amount")}</th>
                    <th>{t("lessee")}</th>
                    <th>{t("lease-agreement")}</th>
                    <th></th>
                </tr>
            </tbody>
        </table>
        <div className='note'>
            <h3>{t("remark-title")}</h3>
            <ul>
                <li>- {t("remark-text1")}</li>
                <li>- {t("remark-text2")}</li>
                <li>- {t("remark-text3")}</li>
            </ul>
        </div>
        
    </div>
  )
}

export default Price
