import { verifyToken, adminPass } from '../middleware/authentication';
import { getAllRoles, createRole, updateRole } from '../controllers/role';

const Routes = (apiRoutes) => {
  apiRoutes
  .get('/roles', verifyToken, getAllRoles)
  .post('/roles', verifyToken, adminPass, createRole)
  .put('/roles/:id', verifyToken, adminPass, updateRole);
};

export default Routes;
