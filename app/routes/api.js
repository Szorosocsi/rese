import { Router } from 'express';
import ResearchController from '../controllers/researchController.js';
import ResearcherController from '../controllers/researcherController.js';
const router = new Router();

router.get('/research', ResearchController.index);
router.post('/research', ResearchController.store);
router.put('/research', ResearchController.update);
router.delete('/research', ResearchController.destroy);


router.get('/researchers', ResearcherController.index);
router.post('/researchers', ResearcherController.store);
router.put('/researchers', ResearcherController.update);
router.delete('/researchers', ResearcherController.destroy);

export default router;