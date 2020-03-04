import { observable, action } from 'mobx';

class ModalStore {
    @observable registrationModal = false;
    @observable SearchModal = false;
    @observable settingModal = false;
    @observable feedbackModal = false;

    @action
    setRegistrationModal(visible) {
        this.registrationModal = visible;
    }

    @action
    setSearchModal(visible) {
        this.SearchModal = visible;
    }

    @action
    setSettingModal(visible) {
        this.settingModal = visible;
    }
    @action
    setFeedbackModal(visible) {
        this.feedbackModal = visible;
    }



}
const modalStore = new ModalStore();
export default modalStore;