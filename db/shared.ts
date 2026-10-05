import {env} from 'cloudflare:workers';
export function database(){if(!env.DB)throw new Error('Project storage unavailable');return env.DB;}
