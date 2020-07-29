import React from "react";
import AuthorCard from "./AuthorCard";

class AuthorsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showAllAuthors: false };
  }

  toggleShowAll() {
    this.setState({ showAllAuthors: !this.state.showAllAuthors });
  }

  // в вспомогательных функциях как лучше -
  // явно указывать в аргуметах какие параметры использует функция showBtn(authors, showAllAuthors)
  // или же брать эти параметры из состояния внутри функции? this.state.showAllAuthors
  // понимаю что в таком маленьком компоненте конечно это не имеет значения и возможно тема холиварная
  // Мне например удобно когда в аргументах указаны все параметы используемые внутри.
  // Таким образом всё становиться наглядно уже в "заголовке" функции
  showBtn(authors, showAllAuthors) {
    return (
      <>
        {authors.length > 3 && (
          <div className="card border-primary">
            <div className="card-body">
              <button
                className="btn btn-block btn-primary"
                onClick={() => this.toggleShowAll()}
              >
                {this.toggleBtnText(authors, showAllAuthors)}
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  toggleBtnText(authors, showAllAuthors) {
    return (
      <>
        {showAllAuthors
          ? `Show only 3 Authors`
          : `Show all ${authors.length} Authors`}
      </>
    );
  }

  render() {
    const { authors } = this.props;
    const showAllAuthors = this.state.showAllAuthors;
    const authorsToShow = showAllAuthors ? authors : authors.slice(0, 3);

    // убрал логику из финального рендера, если это имеет значение :)
    return (
      <>
        {this.showBtn(authors, showAllAuthors)}
        {authorsToShow.map((author, index) => (
          <AuthorCard key={author.id} author={author} className="invisible" />
        ))}
      </>
    );
  }
}

export default AuthorsList;
