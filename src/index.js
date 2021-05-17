import './styles/index.scss';

console.log('hot module refresh');

if (module.hot) {
	module.hot.accept();
}
