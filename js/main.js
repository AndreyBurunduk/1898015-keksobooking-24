
import { validateForm } from './form.js';
import { initMap } from './map.js';
import { onFormSubmit } from './msg.js';
//import { setPreviews } from './previews.js';
import { makeInactive } from './activation.js';

makeInactive ();
initMap();
validateForm();
//setPreviews();
onFormSubmit();
