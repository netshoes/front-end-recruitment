/**
 * Gulp file
 *
 * @author Gustavo Alves - contato@gustavocalves.com.br
 *
 */

require('babel/register');

require('./gulp/imports');

require('./gulp/config');

require('require-dir')('./gulp/tasks', { recurse: true });
