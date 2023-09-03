import React, { useEffect } from 'react';

const LegalNotice = (data) => {
  useEffect(() => {

    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
    script.async = true;

    
    script.addEventListener('load', () => {
      
      const pdfConverter = (e) => {
        e.preventDefault();
        const htmlContent = document.getElementById('htmlContent');

        try {
            html2pdf().from(htmlContent).save('legalnotice.pdf')
          }
        catch (error) {
          console.error('Error generating PDF:', error);
        }
      };

      document.getElementById('convertBtn').addEventListener('click', pdfConverter);
    });

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  
  return (
    <div>
    <h1>Legal Notice</h1>
    <button id="convertBtn" onClick={pdfConverter}>Convert to PDF and Download</button>
    <div id="htmlContent" style="padding-left: 5%; padding-right: 5%">
    <div className={styles.formouter}>
        <div id='legalnoticeform' className={styles.form}>
            <Container>
                <Row>
                    <p className='lnformrows' id='lnlawyer2'><strong>LAWYER NAME</strong></p>
                    <p><strong>Advocate</strong></p>
                </Row><hr/> 
                <Row>
                    <center><strong>LEGAL NOTICE</strong></center>
                    <center><strong>By SPAD/By E-mail</strong></center>
                </Row>
                <Row className='lnformrows' id='lndate'>
                    <Col style="text-align:right">
                        <span >Date : </span>
                        <em>
                            <span>date</span>
                        </em>
                    </Col>
                </Row><br/>
                <Row>
                    <p>To,</p>
                    <p>{data.name}</p>
                    <p>{data.adress}</p>
                </Row>
                
                <Row style="text-align:center">
                    <p><strong>WITHOUT PREJUDICE</strong></p>
                    <p>
                        <strong>SUB : </strong>
                        <em>
                            <span >Legal Notice for Dishonour of Electronic Funds Transfer under Section 25 of The Payment and Settlement Systems Act, 2007. </span>
                        </em>
                    </p>
                </Row>
                <Row>
                    <p>
                        I write under the instructions from and on behalf of my Client{data.name}, residing at{data.adress}.  (hereinafter referred as my “Client”). I hereby serve you with the following legal notice in unequivocal terms towards the dishonored electronic fund Transfer (Hereinafter referred to as eMandate) and address it as follows
                    </p>
                </Row>
                <Row className='lnformrows' id='lnstatements'>
                    <span style="padding-left:2%">
                        <ol>
                            <li>My Client that you have a lawfully enforceable debt in favour of my client under a {data.loantype} vide Loan Account No.  and towards its repayment, you consented for an eMandate for facilitating the auto debit of the EMI Amount of Rs.{data.emi}</li>
                            <li>My Client further states that to his surprise, the EMI auto debit was failed due to “Insufficient Funds” on {data.dod}. My Client states that the aforesaid eMandate was to be honored by you towards your obligation to repay my client. My client states that you had neither repaid my client nor did you honor your eMandate to repay the debt. My Client states that you are liable to pay the EMI amount Rs.{data.emi}</li>  
                            <li>My Client states that it is clear from your actions that you had a malafide motive to gain from my client and leave my client stranded without honoring your eMandate and thus my Client calls upon you to immediately act upon the requisitions stated above to remit to my Client the said sum of amount Rs.{data.emi} within 15 days from the receipt of this Notice, failing which you shall be deemed to have committed an offence U/s. Section 25 of The Payment and Settlement Systems Act, 2007 and appropriate legal proceedings will be initiated against you before the Courts at CHENNAI.</li>
                            <li>Further, as mentioned in Section 25(5) of the Payment and Settlement Systems Act, 2007, please treat this as a Statutory Notice U/s. 138 to 142 of the Negotiable Instrument Act, 1881, as amended up to date. Without prejudice, my Client shall also be entitled to adopt legal proceedings against you either civil or criminal for recovery of the total due amount of amount Rs TOS (IN NUMERIC AND WORDS) and for the legal cost incurred by my Client as a consequence of your negligence which amounts to Rs.5000 (FIVE THOUSAND). </li>
                            <li>I look forward to your full co-operation with the above-stated settlement from you within FIFTEEN (15) days hereof that you shall comply with all the requisitions set hereinabove. Should I not receive an appropriate response from your end to this legal notice within the aforementioned time limit, my Client reserves their right to initiate suitable legal action against you as they are best advised including but not limited to filing of an FIR, without any further notice to you whatsoever.</li>
                            <li>Please deliver your reply and any future correspondence directly to <strong>Lawyer's Address. You may also send a scanned copy of the same to me by email, to lawyers mail </strong></li>
                        </ol>    
                    </span> 
                </Row>
                <Row style="text-align:right">
                    <p>Regards,</p>
                <p>Lawyer name</p>
                <p>(Advocate)</p>
                <p>lawyer id</p>
                </Row>
            </Container>
        </div> 
    </div>
 </div>
  </div>
  );
};

export default LegalNotice;
