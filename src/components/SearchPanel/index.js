// @flow
import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import Modal from '../Modal';
import SearchPanelView from './view';

const TABS = [{ id: 1, name: 'genres' }, { id: 2, name: 'title' }];

type Props = {
    location: { search: string },
    history: { push: any => void }
};

type State = {
    search: ?string,
    searchTab: string,
    isOpen: boolean
};

class SearchPanel extends PureComponent<Props, State> {
    state = {
        search: '',
        searchTab: TABS[1].name,
        isOpen: false
    };

    componentDidMount() {
        const params = new URLSearchParams(this.props.location.search);
        const tab = params.get('tab');
        const search = params.get('searchFilm');
        if (tab) {
            this.setState({ search, searchTab: tab });
        }
    }

    handleChangeInput = (e: SyntheticInputEvent<HTMLInputElement>) => {
        const search = e.target.value;
        this.setState({ search });
    };

    handleClick = (search: string, name, event: SyntheticMouseEvent<HTMLButtonElement>) => {
        if (search === '' || name === '') {
            event.preventDefault();
            this.setState({ isOpen: true });
        } else {
            const { history } = this.props;
            history.push({
                pathname: '/search',
                search: `?${new URLSearchParams({ searchFilm: search, tab: name }).toString()}`
            });
        }
    };

    closeModal = () => {
        this.setState({ isOpen: false });
    };

    handleTabClick = tab => {
        this.setState({ searchTab: tab });
    };

    render() {
        const { search, searchTab, isOpen } = this.state;
        return (
            <>
                <SearchPanelView
                    search={search}
                    activeTab={searchTab}
                    tabs={TABS}
                    onInputChange={this.handleChangeInput}
                    onClick={this.handleClick}
                    onTabClick={this.handleTabClick}
                />
                <Modal
                    show={isOpen}
                    text="Введите данные в поисковую панель!"
                    closeModal={this.closeModal}
                />
            </>
        );
    }
}

export default withRouter(SearchPanel);
