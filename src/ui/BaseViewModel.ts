import { decorate, observable } from 'mobx';

export class BaseViewModel {
    snackBarMessage = '';
}

decorate(BaseViewModel, {
    snackBarMessage: observable,
});
