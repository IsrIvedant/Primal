import * as React from 'react';
import styles from './PurchaseRequisitions.module.scss';
import { IPurchaseRequisitionsProps } from './IPurchaseRequisitionsProps';
import { escape } from '@microsoft/sp-lodash-subset';
import useSPCRUD, { ISPCRUD } from '../../services/bal/spcrud';
import { BrowserRouter as Router, Routes, Route, Link, HashRouter, useParams } from 'react-router-dom';
import { InitiatorDashboard } from './Request/InitiatorDashboard';
import { RequisitionsForm } from './Request/RequisitionsForm';
import { ApprovalDashboard } from './Approval/ApprovalDashboard';
import { ApproverForm } from './Approval/ApproverForm';
import EmployeeOps from '../../services/bal/EmployeeMaster';

require('../../../../node_modules/bootstrap/dist/css/bootstrap.min.css');

export default class PurchaseRequisitions extends React.Component<IPurchaseRequisitionsProps, {}> {

  public render(): React.ReactElement<IPurchaseRequisitionsProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
      <section className={`${styles.purchaseRequisitions} ${hasTeamsContext ? styles.teams : ''}`}>
        <HashRouter>
          <div className='row'>
            <div className='col-sm-2 col-md-2 col-lg-2'>
              <ul>
                <li>
                  <Link to="/">Dashboard</Link>
                </li>
                <li>
                  <Link to="/request">Request</Link>
                </li>
                <li>
                  <Link to="/Approval">Approval</Link>
                </li>
              </ul>
            </div>
            <div className='col-sm-10 col-md-10 col-lg-10'>
              <Routes>
                <Route path="/" element={<InitiatorDashboard {...this.props} />} />
                <Route path="/request" element={<RequisitionsForm {...this.props} />} />
                <Route path="/Approval" element={<ApprovalDashboard {...this.props} />} />
                <Route path='/AFPR/:PRId' element={<ApproverForm  {...this.props} />} />
              </Routes>
            </div>
          </div>

        </HashRouter>
      </section>
    );
  }
}
function props(props: any) {
  throw new Error('Function not implemented.');
}

