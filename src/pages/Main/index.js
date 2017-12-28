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
  };

  addNewFavorite = () => {
    this.props.searchAndAddRepository('mauriciolucas22/reduxtodo');
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
              MEUS FAVORITOS (14)
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


const mapStateToProps = state => ({});

const mapDispatchtoProps = dispatch =>
  bindActionCreators(action, dispatch);

export default connect(mapStateToProps, mapDispatchtoProps)(Main);