import express from 'express';
import axios from 'axios';
import * as crypto from 'crypto';

const app = express();

const chavePublica = '9935bd5708e0e95911e30195337e82a2';
const chavePrivada = '666b673d2340e324b03383873b18616e354a4ac9';

const gerarHash = (ts: string) => {
    const hash = crypto.createHash('md5');
    hash.update(ts + chavePrivada + chavePublica);
    return hash.digest('hex');
};

