/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Button from 'components/Button';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

// Redux
import { bindActionsCreators } from 'redux';
import { connect } from 'react-redux';
import * as action from 'redux/actions/favorites';
import { bindActionCreators } from 'redux';

class Main extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    searchAndAddRepository: PropTypes.func.isRequired,
    favorites: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
    })).isRequired,
  };

  state = {
    newRepositoryName: '',
  }

  addNewFavorite = () => {
    this.props.searchAndAddRepository(this.state.newRepositoryName);
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Icon name="github-alt" size={48} style={styles.logoIcon} />
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            underlineColorAndroid="rgba(0, 0, 0, 0)"
            placeholder="Digite o nome do repositório"
            autoCapitalize="none"
            autoCorrect={false}
            value={this.state.newRepositoryName}
            onChangeText={text => this.setState({ newRepositoryName: text })}
          />
          <Button
            style={styles.button}
            color="success"
            onPress={this.addNewFavorite}
          >
            Adicionar repositório
          </Button>
        </View>

        <View style={styles.userInformation}>
          <TouchableOpacity activeOpacity={0.6} onPress={() => { navigate('Favorites') }}>
            <Text style={styles.favoritesText}>
              MEUS FAVORITOS ({this.props.favorites.length})
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


const mapStateToProps = state => ({
  favorites: state.favorites,
});

const mapDispatchtoProps = dispatch =>
  bindActionCreators(action, dispatch);

export default connect(mapStateToProps, mapDispatchtoProps)(Main);