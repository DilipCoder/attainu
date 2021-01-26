import path from 'path';
import gateway from 'express-gateway';

// services
import './AuthService';
import './DbService';
import './ImageService';
import './PatchService';

gateway()
  .load(path.join(__dirname, 'config'))
  .run();