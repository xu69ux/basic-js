const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
    let dns = [];
    for (let domain of domains) {
        let zones = domain.split('.').reverse();
        let dns_view = '';
        for (let zone of zones) {
            dns_view += '.' + zone;
            dns.push(dns_view);
        }
    }
    let result = {};
    for (let name of dns) {
        if (name in result) {
            result[name] ++;
        } else {
            result[name] = 1;
        }
    }
    return result;
}

module.exports = {
  getDNSStats
};
